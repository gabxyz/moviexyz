import Head from "next/head";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import { AnimatePresence, m } from "framer-motion";
import { Loader2 } from "lucide-react";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import useGenresState from "@/hooks/useGenresState";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const randomIdFetcher = (url: string, { arg }: { arg?: string }) =>
  fetch(arg ? `${url}?genresId=${arg}` : url).then((res) => res.json());

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { letterCase } = useLetterCaseState();
  const { genreIdList } = useGenresState();
  const genresParsed = genreIdList.join("|");

  const { trigger: getRandomId, isMutating: isLoading } = useSWRMutation(
    "/api/randomId",
    randomIdFetcher
  );

  const handleClick = async () => {
    const randomIdRes = await getRandomId(genresParsed);
    router.push(
      {
        pathname: `/movie/${randomIdRes.id}`,
        query: { letterCase: letterCase },
      },
      `/movie/${randomIdRes.id}`
    );
  };

  return (
    <>
      <Head>
        <title>
          {letterCase === "lowercase" ? "movie explorer" : "Movie Explorer"}
        </title>
        <meta name="description" content="explore and discover random movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-between p-4">
        <Header />
        <div className="self-center p-6">
          <button
            onClick={handleClick}
            disabled={isLoading}
            className="h-8 rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <p>Pick random movie</p>
            )}
          </button>
        </div>
        <AnimatePresence mode="wait">
          <m.main
            key={router.asPath}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 250,
            }}
            className="flex-1 md:mt-8"
          >
            {children}
          </m.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
