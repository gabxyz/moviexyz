import { MovieDb } from "moviedb-promise";
import type {
  MovieResult,
  MovieResponse,
  SimilarMovieResponse,
} from "moviedb-promise";
import { env } from "../env/server.mjs";

const moviedb = new MovieDb(env.TMDB_API_KEY);

export const getRandomMovieId = async (genresId: string) => {
  const randomPage = Math.floor(Math.random() * 500 + 1);
  const { results: pageResults = [] } = await moviedb.discoverMovie({
    include_adult: false,
    page: randomPage,
    with_genres: genresId,
  });

  const randomMovie =
    pageResults[Math.floor(Math.random() * pageResults.length)];

  return randomMovie && randomMovie.id;
};

export const getMovieDetails = async (id: number) => {
  const { similar: similarMovies, ...movieInfo } = (await moviedb.movieInfo({
    id,
    append_to_response: "similar",
  })) as MovieResponse & { similar: SimilarMovieResponse };

  if (similarMovies.results) {
    const similarFiltered: MovieResult[] = similarMovies.results.slice(0, 2);
    return {
      ...movieInfo,
      similarMovies: similarFiltered,
    };
  }
};
