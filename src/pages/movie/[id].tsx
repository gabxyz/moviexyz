import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import MovieCard from "@/components/MovieCard";
import useMovieData from "@/hooks/useMovieData";
import useLetterCaseState from "@/hooks/useLetterCaseState";

const MovieInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Number(id);
  const { letterCase } = useLetterCaseState();
  const { isLoading, movieTrigger, movieData } = useMovieData();

  useEffect(() => {
    if (parsedId) {
      movieTrigger(parsedId);
    }
  }, [parsedId, movieTrigger]);

  return (
    <>
      {movieData && (
        <meta
          property="og:image"
          content={`https://moviexyz.vercel.app/api/og?movieTitle=${movieData.title}&movieOverview=${movieData.overview}&moviePoster=${movieData.poster_path}&letterCase=${letterCase}`}
        />
      )}
      <AnimatePresence mode="wait">
        {!isLoading && movieData && (
          <motion.div
            key={movieData.id}
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
    </>
  );
};

export default MovieInfo;
