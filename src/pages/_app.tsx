import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import "@/styles/globals.css";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const interVariable = Inter();

const MyApp: AppType = ({ Component, pageProps }) => {
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
        <Component {...pageProps} />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default MyApp;
