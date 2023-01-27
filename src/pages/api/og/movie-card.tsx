/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const interMedium = fetch(
  new URL("../../../../public/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interBold = fetch(
  new URL("../../../../public/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  try {
    const [interMediumFont, interBoldFont] = await Promise.all([
      interMedium,
      interBold,
    ]);

    const { searchParams } = req.nextUrl;

    const title = searchParams.get("movieTitle");
    const poster = searchParams.get("moviePoster");
    const overview = searchParams.get("movieOverview");

    return new ImageResponse(
      (
        <div
          tw={
            "flex w-full h-full justify-between items-center text-lg p-10 lowercase"
          }
          style={{
            backgroundImage: "linear-gradient(120deg, #3a1e48, #1c274f)",
            color: "#9ba1a6",
            fontFamily: "Inter",
          }}
        >
          <div tw="w-full h-full flex justify-between items-center rounded-xl shadow-lg px-18 bg-[#202425] border-2 border-[#3a3f42]">
            <div tw="flex flex-col max-w-md justify-between h-[534px]">
              <div tw="flex flex-col">
                <h2
                  tw="text-4xl mt-6"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #bf7af0, #849dff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  moviexyz
                </h2>
                <p tw="-mt-4 text-xl">explore and discover random movies</p>
              </div>
              <div tw="flex flex-col mb-6">
                <h3 tw="text-xl text-[#ecedee]">{title}</h3>
                <p tw="-mt-4 max-h-[345px] overflow-hidden">{overview}</p>
              </div>
            </div>
            <div tw="flex items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={`poster image for the movie ${title}`}
                tw="h-[500px] w-[350px] rounded-lg"
              ></img>
            </div>
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