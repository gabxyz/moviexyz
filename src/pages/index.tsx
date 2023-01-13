import { type NextPage } from "next";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import useSWRMutation from "swr/mutation";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import useGenresState from "@/hooks/useGenresState";
import MovieCard from "@/components/MovieCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { UpdateIcon } from "@radix-ui/react-icons";

const randomIdFetcher = (url: string, { arg }: { arg?: string }) =>
  fetch(arg ? `${url}?genresId=${arg}` : url).then((res) => res.json());

const movieDataFetcher = (url: string, { arg }: { arg: number }) =>
  fetch(`${url}/${arg}`).then((res) => res.json());

const Home: NextPage = () => {
  const { genreIdList } = useGenresState();
  const { letterCase } = useLetterCaseState();

  const genresParsed = genreIdList.join("|");

  const { trigger: getRandomId, isMutating } = useSWRMutation(
    "/api/tmdb",
    randomIdFetcher
  );
  const {
    trigger: getMovieData,
    data: movieData,
    isMutating: isMutatingMovie,
  } = useSWRMutation("/api/tmdb", movieDataFetcher);

  const handleClick = async () => {
    const randomIdRes = await getRandomId(genresParsed);
    getMovieData(randomIdRes.id);
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
        <div className="m-6 self-center">
          <button
            onClick={handleClick}
            disabled={isMutating || isMutatingMovie}
            className="h-8 rounded-lg border border-slate-6 bg-slate-3 px-3 text-sm font-medium drop-shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
          >
            {isMutating || isMutatingMovie ? (
              <UpdateIcon className="animate-spin" />
            ) : (
              <p>pick random movie</p>
            )}
          </button>
        </div>
        <main className="flex flex-1 flex-col">
          <AnimatePresence mode="wait">
            {movieData && (
              <motion.div
                key={movieData?.id}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 250,
                }}
              >
                <MovieCard {...movieData} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
