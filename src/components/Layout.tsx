import Link from "next/link";
import { useCallback } from "react";
import clsx from "clsx";
import useSWRImmutable from "swr/immutable";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Loader2 } from "lucide-react";
import useGenresState from "@/hooks/useGenresState";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Layout = ({ children }: LayoutProps) => {
  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "cubic-bezier(0.4, 0.14, 0.3, 1)",
  });
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
        <div className="self-center p-6">
          <Link
            href={`/movie/${data?.id}`}
            onClick={handleClick}
            className={clsx(
              isValidating && "pointer-events-none opacity-80",
              "flex h-8 items-center px-3 text-sm font-medium",
              "rounded-lg border border-slate-7 bg-slate-3 shadow",
              "hover:border-slate-8 hover:bg-slate-4",
              "motion-safe:duration-300 motion-safe:ease-productive-standard"
            )}
          >
            {isValidating ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <p>Pick random movie</p>
            )}
          </Link>
        </div>
        <main ref={parent} className="flex-1 md:mt-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
