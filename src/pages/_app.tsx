import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import "@/styles/globals.css";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Layout from "@/components/Layout";

const interVariable = Inter();

const App: AppType = ({ Component, pageProps }) => {
  const { letterCase } = useLetterCaseState();

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
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
          <Component {...pageProps} />
        </Layout>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
