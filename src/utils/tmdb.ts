import type {
  MovieRecommendationsResponse,
  MovieResponse,
  VideosResponse,
} from "moviedb-promise";
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

  const movies = pageResults.filter(
    (movie) => movie.poster_path && movie.title && movie.overview
  );

  if (movies.length > 0) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex]?.id;
  }
};

export const getMovieDetails = async (id: number) => {
  const {
    videos,
    recommendations,
    poster_path,
    title,
    overview,
    genres,
    release_date,
    runtime,
  } = (await moviedb.movieInfo({
    id,
    append_to_response: "videos,recommendations",
  })) as MovieResponse & {
    videos: VideosResponse;
    recommendations: MovieRecommendationsResponse;
  };

  if (videos.results && recommendations.results) {
    const trailer = videos.results.find((item) => item.type === "Trailer");
    const youtubeId = trailer ? trailer.key : "dQw4w9WgXcQ";
    const recommendedMovies = recommendations.results
      .slice(0, 3)
      .map(({ id, title }) => ({ id, title }));

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
      recommendedMovies,
    };
  }
};
