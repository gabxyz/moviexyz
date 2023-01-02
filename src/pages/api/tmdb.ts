import type { NextApiRequest, NextApiResponse } from "next";
import { MovieDb } from "moviedb-promise";
import { env } from "../../env/server.mjs";

const moviedb = new MovieDb(env.TMDB_API_KEY);

export interface RandomMovie {
  title: string;
  poster_path: string;
  overview: string;
}

export interface RandomMovieError {
  message: string;
}

export default async function randomMovie(
  req: NextApiRequest,
  res: NextApiResponse<RandomMovie | RandomMovieError>
) {
  try {
    const pageNumber = Math.floor(Math.random() * 500 + 1);
    const { results: movieResults = [] } = await moviedb.discoverMovie({
      page: pageNumber,
    });

    const randomMovie =
      movieResults[Math.floor(Math.random() * movieResults.length)];

    if (
      !randomMovie ||
      !randomMovie.title ||
      !randomMovie.poster_path ||
      !randomMovie.overview
    ) {
      res.status(404).json({ message: "Movie not found" });
    } else {
      const { title, poster_path, overview } = randomMovie;
      return res.status(200).json({ title, poster_path, overview });
    }
  } catch (err) {
    res.status(404).json({ message: "Failed to fetch data" });
  }
}
