import useLetterCaseState from "@/hooks/useLetterCaseState";
import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  ogContent: string;
}

const Seo = ({ title, description, url, ogContent }: SeoProps) => {
  const { letterCase } = useLetterCaseState();

  const openGraph: OpenGraph = {
    type: "website",
    url: `https://moviexyz.vercel.app${url ? "/" + url : url}`,
    title: title,
    description: description,
  };

  Object.assign(openGraph, {
    images: [
      {
        url: new URL(`https://moviexyz.vercel.app/api/og?${ogContent}`),
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
      openGraph={openGraph}
      robotsProps={{
        notranslate: true,
      }}
      twitter={{
        handle: "@gabxyzdev",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "viewport",
          content: "initial-scale=1.0, width=device-width",
        },
        {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge; chrome=1",
        },
      ]}
    />
  );
};

export default Seo;
