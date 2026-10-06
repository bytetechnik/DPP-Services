<?php
/**
 * Example SMTP config for mail.php.
 *
 * 1. Copy this file to smtp-config.php (project root for local,
 *    or one level above public_html on Hostinger).
 * 2. Fill in real values.
 * 3. Never commit smtp-config.php.
 */
declare(strict_types=1);

return [
    'host' => 'smtp-relay.brevo.com',
    'port' => 587,
    'user' => '',
    'pass' => '',
    'secure' => 'tls', // 'tls' or 'ssl'
    'from' => 'noreply@dpp-services.de',
    'from_name' => 'DPP Services Kontaktformular',
    'to' => 'info@dpp-services.de',
];
