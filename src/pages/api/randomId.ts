import type { NextApiRequest, NextApiResponse } from "next";

import { getRandomMovieId } from "@/utils/tmdb";

type ResponseError = {
  message: string;
};
type RandomId = {
  id?: number;
};

export default async function randomMovieHandler(
  req: NextApiRequest,
  res: NextApiResponse<RandomId | ResponseError>
) {
  const { query } = req;
  const { genresId } = query;
  try {
    const randomId = await getRandomMovieId(genresId as string);
    return res.status(200).json({ id: randomId });
  } catch (error) {
    return res.status(404).json({ message: "Movie not found" });
  }
}
