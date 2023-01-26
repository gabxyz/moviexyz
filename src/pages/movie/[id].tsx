import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getMovieDetails } from "@/utils/tmdb";
import Seo from "@/components/Seo";
import MovieCard from "@/components/MovieCard";
import useLetterCaseState from "@/hooks/useLetterCaseState";

const MoviePage = ({
  movieData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { letterCase } = useLetterCaseState();
  return (
    <>
      <Seo
        title={
          letterCase === "lowercase"
            ? `moviexyz | ${movieData.title.toLowerCase()}`
            : `Moviexyz | ${movieData.title}`
        }
        description={
          letterCase === "lowercase"
            ? "explore and discover random movies"
            : "Explore and discover random movies"
        }
        ogContent={`movieTitle=${movieData.title}&movieOverview=${movieData.overview}&moviePoster=${movieData.poster_path}`}
      />
      <div className="mx-auto max-w-sm md:max-w-full">
        <MovieCard {...movieData} />
      </div>
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
