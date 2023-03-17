import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";

import useLetterCaseState from "@/hooks/useLetterCaseState";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  ogContent: string;
}

const Seo = ({ title, description, ogContent, url }: SeoProps) => {
  const { letterCase } = useLetterCaseState();

  const og: OpenGraph = {
    url: `https://moviexyz.vercel.app${url ? "/" + url : "/"}`,
    title: title.toLowerCase(),
    description: description,
    siteName: "moviexyz | random movies",
  };
  Object.assign(og, {
    images: [
      {
        url: new URL(`https://moviexyz.vercel.app/api/og${ogContent}`),
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
      canonical="https://moviexyz.vercel.app/"
      nofollow={true}
      additionalMetaTags={[
        {
          name: "keywords",
          content: "Random Movies, Movie Recommendations, TMDb API",
        },
      ]}
    />
  );
};

export default Seo;
