import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { getMovieDetails } from "@/utils/tmdb";
import useLetterCaseState from "@/hooks/useLetterCaseState";
import Seo from "@/components/Seo";
import MovieCard from "@/components/MovieCard";

const MoviePage = ({
  movieData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { letterCase } = useLetterCaseState();

  return (
    <>
      <Seo
        title={`Moviexyz | ${movieData.title}`}
        description="Explore and discover random movies"
        ogContent={`movieTitle=${movieData.title}&movieOverview=${movieData.overview}&moviePoster=${movieData.poster_path}&letterCase=${letterCase}`}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={movieData.id}
          initial={{ opacity: 0, y: 60 }}
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
      </AnimatePresence>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const parsedId = Number(id);
  const movieData = await getMovieDetails(parsedId);

  return {
    props: {
      movieData,
    },
  };
};

export default MoviePage;
