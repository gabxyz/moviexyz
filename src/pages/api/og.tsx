/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const interMedium = fetch(
  new URL("../../../public/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interBold = fetch(
  new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  try {
    const [interMediumFont, interBoldFont] = await Promise.all([
      interMedium,
      interBold,
    ]);

    const { searchParams } = new URL(req.url);
    const poster = searchParams.get("moviePoster");
    const title = searchParams.get("movieTitle");
    const overview = searchParams.get("movieOverview");
    const letterCase = searchParams.get("letterCase");
    return new ImageResponse(
      (
        <div
          tw={`flex w-full h-full justify-between items-center text-lg p-12 ${
            letterCase === "lowercase" ? "lowercase" : "normal-case"
          }`}
          style={{
            backgroundImage: "linear-gradient(to left, #3a1e48, #1c274f)",
            color: "#9ba1a6",
            fontFamily: "Inter",
          }}
        >
          <div tw="flex flex-col max-w-md justify-between h-[534px]">
            <div tw="flex flex-col">
              <h2 tw="text-2xl text-[#ecedee]">Movie Explorer</h2>
              <p tw="-mt-4">Explore and discover random movies</p>
            </div>
            <div tw="flex flex-col">
              <h3 tw="text-xl text-[#ecedee]">{title}</h3>
              <p tw="-mt-2">{overview}</p>
            </div>
          </div>
          <div tw="flex items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt={`Poster image for the movie ${title}`}
              tw="h-[500px] w-[350px] rounded-xl"
            ></img>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interMediumFont,
            style: "normal",
            weight: 500,
          },
          {
            name: "Inter",
            data: interBoldFont,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
