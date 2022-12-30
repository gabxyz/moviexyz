import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";
import "../styles/globals.css";

const interVariable = Inter();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
