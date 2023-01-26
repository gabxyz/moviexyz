import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";
import React from "react";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  ogContent: string;
}

const Seo = ({ title, description, ogContent, url }: SeoProps) => {
  const og: OpenGraph = {
    url: `https://moviexyz.vercel.app${url ? "/" + url : "/"}`,
    title: title,
    description: description,
    siteName: "moviexyz | random movies",
  };
  Object.assign(og, {
    images: [
      {
        url: `https://moviexyz.vercel.app/api/og${ogContent}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  });

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={og}
      twitter={{
        handle: "@gabxyzdev",
        site: "@gabxyzdev",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
