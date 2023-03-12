import "@/styles/globals.css";

import localFont from "@next/font/local";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

import useLetterCaseState from "@/hooks/useLetterCaseState";

const Layout = dynamic(() => import("@/components/Layout"), {
  ssr: false,
});

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
          <Analytics />
        </Layout>
      </Tooltip.Provider>
    </ThemeProvider>
  );
};

export default App;
