import "@/styles/globals.css";

import localFont from "@next/font/local";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/Layout";
import useLetterCaseState from "@/hooks/useLetterCaseState";

const satoshi = localFont({
  src: "../../public/fonts/SatoshiVar.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

const App: AppType = ({ Component, pageProps }) => {
  const { letterCase } = useLetterCaseState();

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <TooltipProvider delayDuration={150}>
        <style jsx global>
          {`
            :root {
              --font-satoshi: ${satoshi.style.fontFamily};
            }
            html {
              text-transform: ${letterCase};
            }
            button {
              text-transform: ${letterCase};
            }
          `}
        </style>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
