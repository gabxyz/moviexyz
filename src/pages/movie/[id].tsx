import MovieCard from "@/components/MovieCard";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";
import { useEffect } from "react";

const movieDataFetcher = (url: string, { arg }: { arg: number }) =>
  fetch(`${url}/${arg}`).then((res) => res.json());

const MoviePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const parsedId = Number(id);

  const {
    data: movieData,
    trigger: movieTrigger,
    isMutating: isLoading,
  } = useSWRMutation("/api/tmdb", movieDataFetcher);

  useEffect(() => {
    movieTrigger(parsedId);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-sm md:max-w-full">
        {movieData && <MovieCard {...movieData} />}
      </div>
    </>
  );
};

export default MoviePage;
