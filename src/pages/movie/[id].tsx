import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
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
        title={`moviexyz | ${movieData.title.toLowerCase()}`}
        description="explore and discover random movies"
        ogContent={`movieTitle=${movieData.title}&movieOverview=${movieData.overview}&moviePoster=${movieData.poster_path}&letterCase=${letterCase}`}
      />
      <MovieCard {...movieData} />
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
