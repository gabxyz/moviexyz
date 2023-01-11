import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import "@styles/globals.css";

const interVariable = Inter();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <style jsx global>{`
        html {
          font-family: ${interVariable.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
