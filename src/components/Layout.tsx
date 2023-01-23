import Head from "next/head";
import useSWRMutation from "swr/mutation";
import { UpdateIcon } from "@radix-ui/react-icons";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import useGenresState from "@/hooks/useGenresState";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Link from "next/link";

type LayoutProps = {
  children?: React.ReactNode;
};

const randomIdFetcher = (url: string, { arg }: { arg?: string }) =>
  fetch(arg ? `${url}?genresId=${arg}` : url).then((res) => res.json());

const Layout = ({ children }: LayoutProps) => {
  const { letterCase } = useLetterCaseState();
  const { genreIdList } = useGenresState();
  const genresParsed = genreIdList.join("|");

  const {
    trigger: getRandomId,
    isMutating: isLoading,
    data: randomId,
  } = useSWRMutation("/api/randomId", randomIdFetcher);

  const handleClick = () => {
    getRandomId(genresParsed);
  };

  useEffect(() => {
    getRandomId(genresParsed);
  }, []);

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
          <Link
            href={`/movie/${randomId?.id}`}
            onClick={handleClick}
            className="h-8 rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
          >
            {isLoading ? (
              <UpdateIcon className="animate-spin" />
            ) : (
              <p>Pick random movie</p>
            )}
          </Link>
        </div>
        <main className="flex-1 md:mt-8">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
