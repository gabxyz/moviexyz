import Head from "next/head";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import { UpdateIcon } from "@radix-ui/react-icons";
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
  const {
    trigger: getRandomId,
    isMutating,
    data: randomMovieId,
  } = useSWRMutation("/api/tmdb", randomIdFetcher);

  const handleClick = async () => {
    const randomIdRes = await getRandomId(genresParsed);
    router.push(`/movie/${randomIdRes.id}`);
  };

  return (
    <>
      <Head>
        <title>
          {letterCase === "lowercase" ? "movie explorer" : "Movie Explorer"}
        </title>
        <meta name="description" content="explore and discover random movies" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://movie-explorer-opal.vercel.app/api/og?movieId=${randomMovieId.id}`}
        />
      </Head>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-between p-4">
        <Header />
        <div className="m-6 self-center">
          <button
            onClick={handleClick}
            disabled={isMutating}
            className="h-8 rounded-lg border border-slate-6 bg-slate-3 px-3 text-sm font-medium drop-shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
          >
            {isMutating ? (
              <UpdateIcon className="animate-spin" />
            ) : (
              <p>Pick random movie</p>
            )}
          </button>
        </div>
        <main className="flex-1 md:mt-10">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
