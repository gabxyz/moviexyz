import MovieCard from "@/components/MovieCard";
import useMovieData from "@/hooks/useMovieData";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MovieInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Number(id);

  const { isLoading, movieTrigger, movieData } = useMovieData();

  useEffect(() => {
    if (parsedId) {
      movieTrigger(parsedId);
    }
  }, [parsedId, movieTrigger]);

  return (
    <>
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
