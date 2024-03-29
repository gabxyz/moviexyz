import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import MovieCard from "@/components/MovieCard";
import Seo from "@/components/Seo";
import { getMovieDetails } from "@/utils/tmdb";

const MoviePage = ({
  movieData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Seo
        title={`moviexyz | ${movieData.title}`}
        description="discover random movies at the click of a button!"
        ogContent={`/movie-card?moviePoster=${movieData?.poster_path}&movieTitle=${movieData?.title}&movieOverview=${movieData?.overview}`}
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
