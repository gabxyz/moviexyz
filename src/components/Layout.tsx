import { IconLoader2 } from "@tabler/icons-react";
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
    fetcher,
    { revalidateOnMount: true }
  );

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    await mutate(`/api/randomId?genresId=${genresParsed}`);
    setIsLoading(false);
  }, [genresParsed, mutate]);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-between p-4">
        <Header />
        <div className="my-6 self-center">
          <Link
            href={`/movie/${data?.id}`}
            onClick={handleClick}
            className={clsx(
              isLoading && "pointer-events-none opacity-80",
              "flex h-8 items-center px-3 text-sm",
              "rounded-lg border border-mauve-7 bg-mauve-4 shadow",
              "hover:border-mauve-8 hover:bg-mauve-5",
              "motion-safe:duration-200 motion-safe:ease-productive-standard"
            )}
          >
            {isLoading ? (
              <IconLoader2 size={16} className="animate-spin" />
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
