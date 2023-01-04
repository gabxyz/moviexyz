import { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import SelectTheme from "../components/SelectTheme";
import MovieCard from "../components/MovieCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const [movieId, setMovieId] = useState<any>();
  const [movieData, setMovieData] = useState<any>();
  const [show, setShow] = useState(false);

  const fetchRandomId = async () => {
    const randomIdRes = await fetcher("/api/tmdb");
    return randomIdRes.id;
  };

  const fetchMovieInfo = async (id: number) => {
    const movieRes = await fetcher(`/api/tmdb/${id}`);
    return movieRes;
  };

  const handleClick = async () => {
    const randomId = await fetchRandomId();
    setMovieId(randomId);
    const movieInfo = await fetchMovieInfo(movieId);
    setMovieData(movieInfo);
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 400);
  };

  useEffect(() => {
    const fetchInitial = async () => {
      const randomId = await fetchRandomId();
      setMovieId(randomId);
      const movieInfo = await fetchMovieInfo(randomId);
      setMovieData(movieInfo);
    };
    fetchInitial();
  }, []);

  return (
    <>
      <Head>
        <title>movie explorer</title>
        <meta name="description" content="explore and discover random movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-3xl p-6">
        <>
          <div className="relative flex flex-col items-start gap-2 rounded-xl border border-slate-6 bg-slate-2 p-4 shadow-md">
            <div className="flex w-full justify-between">
              <div>
                <h1 className="font-semibold md:text-lg">movie explorer</h1>
                <p className="mb-2 text-slate-11">
                  explore and discover random movies
                </p>
              </div>
              <SelectTheme />
            </div>
            <button
              onClick={handleClick}
              className="h-9 self-center rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
            >
              pick random movie
            </button>
          </div>
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 40 }}
                exit={{ opacity: 0 }}
              >
                {movieData && (
                  <div>
                    <MovieCard {...movieData} />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </main>
    </>
  );
};

export default Home;
