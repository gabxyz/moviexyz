import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";
import { useRouter } from "next/router";
import React from "react";

interface SeoProps {
  title: string;
  ogContent: string;
}

const Seo = ({ title, ogContent, ...rest }: SeoProps) => {
  const router = useRouter();

  const openGraph: OpenGraph = {
    url: `https://moviexyz.vercel.app${router.asPath}`,
    title: `moviexyz | ${title}`,
    images: [
      {
        url: `https://moviexyz.vercel.app/api/og?${ogContent}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };

  return (
    <NextSeo
      title={`moviexyz | ${title}`}
      canonical={`https://moviexyz.vercel.app${router.asPath}`}
      openGraph={openGraph}
      {...rest}
    />
  );
};

export default Seo;
