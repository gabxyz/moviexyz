import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

const interVariable = Inter();

const App: AppType = ({ Component, pageProps }) => {
  const { letterCase } = useLetterCaseState();
  const pageTitle = letterCase === "lowercase" ? "moviexyz" : "Moviexyz";
  const pageDescription =
    letterCase === "lowercase"
      ? "explore and discover random movies"
      : "Explore and discover random movies";

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">
          <TooltipProvider delayDuration={150}>
            <style jsx global>
              {`
                html {
                  font-family: ${interVariable.style.fontFamily};
                  text-transform: ${letterCase};
                }
                button {
                  text-transform: ${letterCase};
                }
              `}
            </style>
            <Layout>
              <DefaultSeo
                title={pageTitle}
                description={pageDescription}
                openGraph={{
                  title: pageTitle,
                  description: pageDescription,
                  type: "website",
                  url: "https://moviexyz.vercel.app/",
                  siteName: "moviexyz",
                  images: [
                    {
                      url: "https://moviexyz.vercel.app/api/og",
                      width: 1200,
                      height: 630,
                    },
                  ],
                }}
                twitter={{
                  handle: "@gabxyzdev",
                  cardType: "summary_large_image",
                }}
              />
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </TooltipProvider>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
};

export default App;
