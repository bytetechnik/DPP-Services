<?php
/**
 * DPP Services – contact form mail handler
 * Deploy on Hostinger (PHP) alongside the built SPA.
 *
 * Secrets live in smtp-config.php (never commit):
 * - Local: project root (sibling of /public)
 * - Hostinger: one level above public_html
 * Copy smtp-config.example.php → smtp-config.php and fill values.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// ---------------------------------------------------------------------------
// Load SMTP configuration (outside web root preferred)
// ---------------------------------------------------------------------------
$configPaths = [
    dirname(__DIR__) . '/smtp-config.php', // project root / parent of public_html
    __DIR__ . '/smtp-config.php',          // fallback same directory (not recommended)
];

$smtp = null;
foreach ($configPaths as $configPath) {
    if (is_readable($configPath)) {
        $loaded = require $configPath;
        if (is_array($loaded)) {
            $smtp = $loaded;
            break;
        }
    }
}

$SMTP_HOST = is_string($smtp['host'] ?? null) ? $smtp['host'] : '';
$SMTP_PORT = isset($smtp['port']) ? (int) $smtp['port'] : 587;
$SMTP_USER = is_string($smtp['user'] ?? null) ? $smtp['user'] : '';
$SMTP_PASS = is_string($smtp['pass'] ?? null) ? $smtp['pass'] : '';
$SMTP_SECURE = is_string($smtp['secure'] ?? null) ? $smtp['secure'] : 'tls';
$SMTP_FROM = is_string($smtp['from'] ?? null) ? $smtp['from'] : '';
$SMTP_FROM_NAME = is_string($smtp['from_name'] ?? null) ? $smtp['from_name'] : 'DPP Services Kontaktformular';
$SMTP_TO = is_string($smtp['to'] ?? null) ? $smtp['to'] : '';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function read_input(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? '';

    if (stripos($contentType, 'application/json') !== false) {
        $raw = file_get_contents('php://input');
        $data = json_decode($raw ?: '', true);
        return is_array($data) ? $data : [];
    }

    return $_POST;
}

function clean_string(mixed $value, int $maxLen): string
{
    if (!is_string($value) && !is_numeric($value)) {
        return '';
    }
    $value = trim((string) $value);
    $value = str_replace(["\r", "\n", "\0"], ' ', $value);
    if (mb_strlen($value) > $maxLen) {
        $value = mb_substr($value, 0, $maxLen);
    }
    return $value;
}

function clean_multiline(mixed $value, int $maxLen): string
{
    if (!is_string($value) && !is_numeric($value)) {
        return '';
    }
    $value = trim((string) $value);
    $value = str_replace("\0", '', $value);
    $value = preg_replace("/\r\n|\r/", "\n", $value) ?? $value;
    if (mb_strlen($value) > $maxLen) {
        $value = mb_substr($value, 0, $maxLen);
    }
    return $value;
}

// ---------------------------------------------------------------------------
// Request gates
// ---------------------------------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    respond(204, ['ok' => true]);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

if ($SMTP_HOST === '' || $SMTP_USER === '' || $SMTP_PASS === '' || $SMTP_FROM === '' || $SMTP_TO === '') {
    respond(503, [
        'ok' => false,
        'error' => 'Mail service is not configured yet. Please try again later or contact us by email.',
    ]);
}

$data = read_input();

// Honeypot – bots fill this; humans leave it empty
$honeypot = clean_string($data['website'] ?? '', 100);
if ($honeypot !== '') {
    respond(200, ['ok' => true]);
}

$firstName = clean_string($data['firstName'] ?? '', 100);
$lastName = clean_string($data['lastName'] ?? '', 100);
$position = clean_string($data['position'] ?? '', 100);
$company = clean_string($data['company'] ?? '', 150);
$address = clean_string($data['address'] ?? '', 200);
$email = clean_string($data['email'] ?? '', 255);
$phone = clean_string($data['phone'] ?? '', 30);
$description = clean_multiline($data['description'] ?? '', 1000);

$required = [
    'firstName' => $firstName,
    'lastName' => $lastName,
    'position' => $position,
    'company' => $company,
    'address' => $address,
    'email' => $email,
    'phone' => $phone,
    'description' => $description,
];

foreach ($required as $key => $value) {
    if ($value === '') {
        respond(422, ['ok' => false, 'error' => "Missing or invalid field: {$key}"]);
    }
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Invalid email address']);
}

// ---------------------------------------------------------------------------
// Build message
// ---------------------------------------------------------------------------

$subject = "Neue Kontaktanfrage – {$firstName} {$lastName}";
$replyToName = trim("{$firstName} {$lastName}");

$bodyText = implode("\n", [
    'Neue Anfrage über das Kontaktformular',
    str_repeat('-', 40),
    "Vorname: {$firstName}",
    "Nachname: {$lastName}",
    "Position: {$position}",
    "Unternehmen: {$company}",
    "Adresse: {$address}",
    "E-Mail: {$email}",
    "Telefon: {$phone}",
    '',
    'Beschreibung / Anfrage:',
    $description,
    '',
    'Gesendet: ' . gmdate('Y-m-d H:i:s') . ' UTC',
]);

$bodyHtml = '<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;font-size:14px;color:#111;">'
    . '<h2 style="margin:0 0 12px;">Neue Kontaktanfrage – ' . htmlspecialchars($replyToName, ENT_QUOTES, 'UTF-8') . '</h2>'
    . '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">'
    . '<tr><td><strong>Vorname</strong></td><td>' . htmlspecialchars($firstName, ENT_QUOTES, 'UTF-8') . '</td></tr>'
    . '<tr><td><strong>Nachname</strong></td><td>' . htmlspecialchars($lastName, ENT_QUOTES, 'UTF-8') . '</td></tr>'
    . '<tr><td><strong>Position</strong></td><td>' . htmlspecialchars($position, ENT_QUOTES, 'UTF-8') . '</td></tr>'
    . '<tr><td><strong>Unternehmen</strong></td><td>' . htmlspecialchars($company, ENT_QUOTES, 'UTF-8') . '</td></tr>'
    . '<tr><td><strong>Adresse</strong></td><td>' . htmlspecialchars($address, ENT_QUOTES, 'UTF-8') . '</td></tr>'
    . '<tr><td><strong>E-Mail</strong></td><td>' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</td></tr>'
    . '<tr><td><strong>Telefon</strong></td><td>' . htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') . '</td></tr>'
    . '</table>'
    . '<p style="margin-top:16px;"><strong>Beschreibung / Anfrage</strong></p>'
    . '<p style="white-space:pre-wrap;">' . nl2br(htmlspecialchars($description, ENT_QUOTES, 'UTF-8')) . '</p>'
    . '<p style="color:#666;font-size:12px;">Gesendet: ' . gmdate('Y-m-d H:i:s') . ' UTC</p>'
    . '</body></html>';

// ---------------------------------------------------------------------------
// SMTP send (native sockets – no Composer dependency on Hostinger)
// ---------------------------------------------------------------------------

function smtp_expect($fp, array $codes): string
{
    $response = '';
    while (($line = fgets($fp, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $codes, true)) {
        throw new RuntimeException('Unexpected SMTP response: ' . trim($response));
    }
    return $response;
}

function smtp_cmd($fp, string $command, array $codes): string
{
    fwrite($fp, $command . "\r\n");
    return smtp_expect($fp, $codes);
}

function send_smtp_mail(
    string $host,
    int $port,
    string $secure,
    string $user,
    string $pass,
    string $from,
    string $fromName,
    string $to,
    string $replyTo,
    string $replyToName,
    string $subject,
    string $textBody,
    string $htmlBody
): void {
    $remote = ($secure === 'ssl' ? 'ssl://' : 'tcp://') . $host . ':' . $port;
    $fp = @stream_socket_client($remote, $errno, $errstr, 30, STREAM_CLIENT_CONNECT);
    if (!$fp) {
        throw new RuntimeException("SMTP connect failed: {$errstr} ({$errno})");
    }
    stream_set_timeout($fp, 30);

    smtp_expect($fp, [220]);
    $ehloHost = 'localhost';
    smtp_cmd($fp, 'EHLO ' . $ehloHost, [250]);

    if ($secure === 'tls') {
        smtp_cmd($fp, 'STARTTLS', [220]);
        $cryptoOk = @stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT);
        if (!$cryptoOk) {
            $cryptoOk = @stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        }
        if (!$cryptoOk) {
            throw new RuntimeException('STARTTLS failed');
        }
        smtp_cmd($fp, 'EHLO ' . $ehloHost, [250]);
    }

    smtp_cmd($fp, 'AUTH LOGIN', [334]);
    smtp_cmd($fp, base64_encode($user), [334]);
    smtp_cmd($fp, base64_encode($pass), [235]);

    smtp_cmd($fp, 'MAIL FROM:<' . $from . '>', [250]);
    smtp_cmd($fp, 'RCPT TO:<' . $to . '>', [250, 251]);
    smtp_cmd($fp, 'DATA', [354]);

    $boundary = 'b_' . bin2hex(random_bytes(12));
    $messageId = '<dpp-' . bin2hex(random_bytes(12)) . '@dpp-services.de>';
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $encodedReplyName = '=?UTF-8?B?' . base64_encode($replyToName) . '?=';

    $headers = [
        'Date: ' . date('r'),
        'Message-ID: ' . $messageId,
        'From: ' . $encodedFromName . ' <' . $from . '>',
        'To: <' . $to . '>',
        'Reply-To: ' . $encodedReplyName . ' <' . $replyTo . '>',
        'Subject: ' . $encodedSubject,
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: DPP-Services-MailHandler',
    ];

    $message = implode("\r\n", $headers) . "\r\n\r\n"
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($textBody))
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($htmlBody))
        . '--' . $boundary . "--";

    // Dot-stuff lines that start with "." (do this BEFORE the DATA terminator)
    $message = preg_replace('/^\./m', '..', $message) ?? $message;

    fwrite($fp, $message . "\r\n.\r\n");
    smtp_expect($fp, [250]);
    smtp_cmd($fp, 'QUIT', [221]);
    fclose($fp);
}

try {
    send_smtp_mail(
        $SMTP_HOST,
        $SMTP_PORT,
        $SMTP_SECURE,
        $SMTP_USER,
        $SMTP_PASS,
        $SMTP_FROM,
        $SMTP_FROM_NAME,
        $SMTP_TO,
        $email,
        $replyToName,
        $subject,
        $bodyText,
        $bodyHtml
    );
    respond(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('mail.php SMTP error: ' . $e->getMessage());
    respond(500, [
        'ok' => false,
        'error' => 'Could not send message. Please try again later or contact us by email.',
    ]);
}
