import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import useSWRImmutable from "swr/immutable";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useGenresState from "@/hooks/useGenresState";

type LayoutProps = {
  children?: React.ReactNode;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { genreIdList } = useGenresState();
  const genresParsed = genreIdList.join("|");

  const { data, mutate, isValidating } = useSWRImmutable(
    `/api/randomId?genresId=${genresParsed}`,
    fetcher
  );

  const handleClick = useCallback(() => {
    mutate(`/api/randomId?genresId=${genresParsed}`);
  }, [genresParsed, mutate]);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-between p-4">
        <Header />
        <div className="my-6 self-center">
          <Link
            href={`/movie/${data?.id}`}
            onClick={handleClick}
            className={clsx(
              isValidating && "pointer-events-none opacity-80",
              "flex h-8 items-center px-3 text-sm",
              "rounded-lg border border-slate-7 bg-slate-3 shadow",
              "hover:border-slate-8 hover:bg-slate-4",
              "motion-safe:duration-200 motion-safe:ease-productive-standard"
            )}
          >
            {isValidating ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <p>Pick random movie</p>
            )}
          </Link>
        </div>
        <AnimatePresence mode="wait">
          <motion.main
            key={router.asPath}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="flex-1"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
