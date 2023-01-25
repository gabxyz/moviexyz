import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getMovieDetails } from "@/utils/tmdb";
import Seo from "@/components/Seo";
import MovieCard from "@/components/MovieCard";

const MoviePage = ({
  movieData,
  letterCase,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Seo
        title={`moviexyz | ${movieData.title.toLowerCase()}`}
        description="explore and discover random movies"
        ogContent={`movieTitle=${movieData.title}&movieOverview=${movieData.overview}&moviePoster=${movieData.poster_path}&letterCase=${letterCase}`}
      />
      <div className="mx-auto max-w-sm md:max-w-full">
        <MovieCard {...movieData} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, letterCase } = context.query;
  const parsedId = Number(id);
  const movieData = await getMovieDetails(parsedId);

  return {
    props: {
      movieData,
      letterCase,
    },
  };
};

export default MoviePage;
