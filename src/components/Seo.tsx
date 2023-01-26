import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  ogContent?: string;
}

const Seo = ({ title, description, url, ogContent }: SeoProps) => {
  const openGraph: OpenGraph = {
    type: "website",
    url: `https://moviexyz.vercel.app${url ? "/" + url : ""}`,
    title: title,
    description: description,
    siteName: "moviexyz",
    images: [
      {
        url: `https://moviexyz.vercel.app/api/og${
          ogContent ? `?${ogContent}` : ""
        }`,
        width: 1200,
        height: 630,
      },
    ],
  };

  return (
    <NextSeo
      title={title}
      description={description}
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
