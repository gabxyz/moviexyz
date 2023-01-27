import { useRouter } from "next/router";
// import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { AnimatePresence, m } from "framer-motion";
import { Loader2 } from "lucide-react";
import useGenresState from "@/hooks/useGenresState";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCallback } from "react";
import Link from "next/link";

type LayoutProps = {
  children?: React.ReactNode;
};

// const randomIdFetcher = (url: string, { arg }: { arg?: string }) =>
//   fetch(arg ? `${url}?genresId=${arg}` : url).then((res) => res.json());

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { genreIdList } = useGenresState();
  const genresParsed = genreIdList.join("|");

  // const { trigger: getRandomId, isMutating: isLoading } = useSWRMutation(
  //   "/api/randomId",
  //   randomIdFetcher
  // );
  const { data, mutate, isValidating } = useSWRImmutable(
    `/api/randomId?genresId=${genresParsed}`,
    fetcher
  );

  // const handleClick = async () => {
  //   const randomIdRes = await getRandomId(genresParsed);
  //   router.push(`/movie/${randomIdRes.id}`);
  // };

  const handleClick = useCallback(() => {
    mutate(`/api/randomId?genresId=${genresParsed}`);
  }, [genresParsed, data, mutate, router]);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-between p-4">
        <Header />
        <div className="self-center p-6">
          <Link href={`/movie/${data?.id}`} onClick={handleClick}>
            <span className="flex h-8 items-center rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard">
              {isValidating ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <p>Pick random movie</p>
              )}
            </span>
          </Link>
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
