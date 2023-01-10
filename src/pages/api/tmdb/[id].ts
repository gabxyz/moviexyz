import type { NextApiRequest, NextApiResponse } from "next";
import { getMovieDetails } from "../../../util/tmdb";
import type { MovieResponse } from "moviedb-promise";

type ResponseError = {
  message: string;
};

export default async function movieDataHandler(
  req: NextApiRequest,
  res: NextApiResponse<MovieResponse | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const parsedId = Number(id);

  try {
    const movieData = (await getMovieDetails(parsedId)) as MovieResponse;
    return res.status(200).json(movieData);
  } catch (error) {
    return res.status(404).json({ message: "Movie not found" });
  }
}
