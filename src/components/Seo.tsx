import { NextSeo } from "next-seo";
import type { OpenGraph } from "next-seo/lib/types";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface SeoProps {
  title: string;
  description: string;
  ogContent: string;
}

const Seo = ({ title, description, ogContent }: SeoProps) => {
  const router = useRouter();
  const openGraph: OpenGraph = useMemo(
    () => ({
      type: "website",
      url: `https://moviexyz.vercel.app${router.asPath}`,
      title: title,
      description: description,
      siteName: "moviexyz - random movies",
      images: [
        {
          url: `https://moviexyz.vercel.app/api/og?${ogContent}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    }),
    [router.asPath, title, description, ogContent]
  );

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
