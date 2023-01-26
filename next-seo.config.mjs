const title = "moviexyz";
const description = "explore and discover random movies";

const SEO = {
  title,
  description,
  canonical: "https://moviexyz.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://moviexyz.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://moviexyz.vercel.app/api/og",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@gabxyzdev",
    site: "@gabxyzdev",
    cardType: "summary_large_image",
  },
};

export default SEO;
