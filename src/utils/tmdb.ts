import { MovieDb } from "moviedb-promise";
import type { MovieResponse, VideosResponse } from "moviedb-promise";
import { env } from "@/env/server.mjs";

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
  const { videos: movieTrailer, ...movieInfo } = (await moviedb.movieInfo({
    id,
    append_to_response: "videos",
  })) as MovieResponse & { videos: VideosResponse };

  if (movieTrailer.results) {
    const trailer = movieTrailer.results.find(
      (item) => item.type === "Trailer"
    );
    const youtubeId = trailer ? trailer.key : "dQw4w9WgXcQ";

    return {
      ...movieInfo,
      movieTrailer: youtubeId,
    };
  }
};
