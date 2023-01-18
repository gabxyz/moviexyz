import useSWRMutation from "swr/mutation";

const movieDataFetcher = (url: string, { arg }: { arg: number }) =>
  fetch(`${url}/${arg}`).then((res) => res.json());
const useMovieData = () => {
  const {
    data: movieData,
    trigger: movieTrigger,
    isMutating: isLoading,
  } = useSWRMutation("/api/tmdb", movieDataFetcher);

  return {
    movieData,
    movieTrigger,
    isLoading,
  };
};
export default useMovieData;
