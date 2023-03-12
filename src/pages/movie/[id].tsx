import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";

import Seo from "@/components/Seo";
import { getMovieDetails } from "@/utils/tmdb";

const MovieCard = dynamic(() => import("@/components/MovieCard"), {
  ssr: false,
});

const MoviePage = ({
  movieData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Seo
        title={`Moviexyz | ${movieData.title}`}
        description="explore and discover random movies"
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
