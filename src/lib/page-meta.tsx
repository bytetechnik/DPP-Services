import { useEffect } from "react";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function PageMeta({
  title,
  description,
  path,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  jsonLd?: unknown;
}) {
  useEffect(() => {
    const url = `${SITE_ORIGIN}${path}`;
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", SITE_LOGO);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:image", SITE_LOGO);
    upsertLink("canonical", url);

    document.getElementById("page-jsonld")?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-jsonld";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById("page-jsonld")?.remove();
    };
  }, [title, description, path, jsonLd]);

  return null;
}
