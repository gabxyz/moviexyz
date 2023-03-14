import { IconArrowsShuffle, IconLoader2 } from "@tabler/icons-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import useSWR from "swr";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useGenresState from "@/hooks/useGenresState";

type LayoutProps = {
  children?: React.ReactNode;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { genreIdList } = useGenresState();
  const genresParsed = useMemo(() => genreIdList.join("|"), [genreIdList]);

  const { data, mutate } = useSWR(
    `/api/randomId?genresId=${genresParsed}`,
    fetcher
  );

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    await mutate(`/api/randomId?genresId=${genresParsed}`);
    setIsLoading(false);
  }, [genresParsed, mutate]);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-between p-4 pt-0">
        <Header />
        <div className="my-6 flex flex-col items-center gap-6">
          <p className="text-center text-lg font-semibold leading-none opacity-90">
            Discover{" "}
            <span className="bg-gradient-to-l from-purple-11 to-indigo-11 bg-clip-text text-transparent">
              random movies
            </span>{" "}
            at the click of a button!
          </p>
          <div
            className={clsx(
              "group h-fit w-fit rounded-[9px] bg-gradient-to-r from-plum-7 via-indigo-7 to-grass-7 p-px shadow-md",
              isLoading && "pointer-events-none opacity-75"
            )}
          >
            <Link
              href={`/movie/${data?.id}`}
              onClick={handleClick}
              className={clsx(
                "flex h-full w-full items-center overflow-hidden py-1 px-4 text-[15px] font-semibold text-mauve-11",
                "rounded-lg bg-mauve-4",
                "motion-safe:duration-200 motion-safe:ease-productive-standard"
              )}
            >
              {isLoading ? (
                <div className="flex h-[22.5px] items-center">
                  <IconLoader2 size={16} className="animate-spin" />
                </div>
              ) : (
                <div className="flex items-center gap-2 text-mauve-12 opacity-70 group-hover:opacity-100 motion-safe:duration-200 motion-safe:ease-productive-standard">
                  <IconArrowsShuffle size={20} />
                  <p>Click to Pick</p>
                </div>
              )}
            </Link>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.main
            key={router.asPath}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
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
