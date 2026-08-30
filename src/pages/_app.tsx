import "@/styles/globals.css";

import localFont from "@next/font/local";
import * as Tooltip from "@radix-ui/react-tooltip";
import { type AppType } from "next/dist/shared/lib/utils";
import Script from "next/script";
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
      <Tooltip.Provider delayDuration={150}>
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
        </Layout>
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "11303c17d67f408fbda5c1b3c6900fd8"}'
        />
      </Tooltip.Provider>
    </ThemeProvider>
  );
};

export default App;
