import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import "@/styles/globals.css";
import useLetterCaseState from "@/hooks/useLetterCaseState";

const interVariable = Inter();

const MyApp: AppType = ({ Component, pageProps }) => {
  const { letterCase } = useLetterCaseState();

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
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
    </ThemeProvider>
  );
};

export default MyApp;
