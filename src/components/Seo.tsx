import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";

import useLetterCaseState from "@/hooks/useLetterCaseState";

// Update this if the site ever moves to a different domain again.
const SITE_URL = "https://movie-xyz.netlify.app";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  ogContent: string;
}

const Seo = ({ title, description, ogContent, url }: SeoProps) => {
  const { letterCase } = useLetterCaseState();

  const og: OpenGraph = {
    url: `${SITE_URL}${url ? "/" + url : "/"}`,
    title: title.toLowerCase(),
    description: description,
    siteName: "moviexyz | random movies",
  };
  Object.assign(og, {
    images: [
      {
        url: new URL(`${SITE_URL}/api/og${ogContent}`),
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "moviexyz",
    url: SITE_URL,
    description: "discover random movies at the click of a button!",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextSeo
        title={letterCase === "lowercase" ? title.toLowerCase() : title}
        description={
          letterCase === "lowercase" ? description.toLowerCase() : description
        }
        openGraph={og}
        twitter={{
          handle: "@gabxyzz",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.png",
            type: "image/png",
          },
        ]}
        canonical={`${SITE_URL}/`}
      />
    </>
  );
};

export default Seo;
