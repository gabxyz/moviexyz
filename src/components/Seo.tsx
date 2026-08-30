import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";

import useLetterCaseState from "@/hooks/useLetterCaseState";

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

  return (
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
  );
};

export default Seo;
