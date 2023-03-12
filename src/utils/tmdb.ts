import type { MovieResponse, VideosResponse } from "moviedb-promise";
import { MovieDb } from "moviedb-promise";

import { env } from "@/env/server.mjs";

const moviedb = new MovieDb(env.TMDB_API_KEY);

export const getRandomMovieId = async (genresId: string) => {
  const randomPage = Math.floor(Math.random() * 500 + 1);
  const { results: pageResults = [] } = await moviedb.discoverMovie({
    include_adult: false,
    page: randomPage,
    with_genres: genresId,
  });
  const randomMovie = pageResults.find(
    (movie) => movie.poster_path && movie.title && movie.overview
  );
  return randomMovie && randomMovie.id;
};

export const getMovieDetails = async (id: number) => {
  const {
    videos: movieTrailer,
    poster_path,
    title,
    overview,
    genres,
    release_date,
    runtime,
  } = (await moviedb.movieInfo({
    id,
    append_to_response: "videos",
  })) as MovieResponse & { videos: VideosResponse };

  if (movieTrailer.results) {
    const trailer = movieTrailer.results.find(
      (item) => item.type === "Trailer"
    );
    const youtubeId = trailer ? trailer.key : "dQw4w9WgXcQ";

    const movieInfo = {
      poster_path,
      title,
      overview,
      genres,
      release_date,
      runtime,
    };

    return {
      ...movieInfo,
      movieTrailer: youtubeId,
    };
  }
};
