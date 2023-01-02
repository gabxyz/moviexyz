import { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import useSWRMutation from "swr/mutation";
import { AnimatePresence, motion } from "framer-motion";

import type { RandomMovie } from "./api/tmdb";
import SelectTheme from "../components/SelectTheme";
import MovieCard from "../components/MovieCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { trigger, data } = useSWRMutation("/api/tmdb", fetcher);
  const [randomMovie, setRandomMovie] = useState<RandomMovie>();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    trigger();
    setRandomMovie(data);
    setTimeout(() => {
      setShow(true);
    }, 400);

    setShow(false);
  };

  useEffect(() => {
    trigger();
  }, []);

  return (
    <>
      <Head>
        <title>movie explorer</title>
        <meta name="description" content="explore and discover random movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full flex-col items-center justify-center">
        <>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1>movie explorer</h1>
            <button
              onClick={handleClick}
              className="rounded-lg border border-gray-7 bg-gray-3 px-4 py-2 text-sm font-light shadow-md hover:border-gray-8 motion-safe:duration-150 motion-safe:ease-productive-standard"
            >
              pick random movie
            </button>
          </div>
          <SelectTheme />
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 40 }}
                exit={{ opacity: 0 }}
              >
                {randomMovie && <MovieCard {...randomMovie} />}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </main>
    </>
  );
};

export default Home;
