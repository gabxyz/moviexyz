import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import SEO from "../../next-seo.config.mjs";
import { DefaultSeo } from "next-seo";

const interVariable = Inter();

const App: AppType = ({ Component, pageProps }) => {
  const { letterCase } = useLetterCaseState();

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
            <DefaultSeo {...SEO} />
            <Layout>
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
