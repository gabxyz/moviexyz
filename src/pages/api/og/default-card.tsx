/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const satoshiMedium = fetch(
  new URL("../../../../public/fonts/Satoshi-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const satoshiBold = fetch(
  new URL("../../../../public/fonts/Satoshi-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
  try {
    const [satoshiMediumFont, satoshiBoldFont] = await Promise.all([
      satoshiMedium,
      satoshiBold,
    ]);

    return new ImageResponse(
      (
        <div
          tw={
            "flex w-full h-full justify-between items-center text-lg px-10 py-12 lowercase"
          }
          style={{
            backgroundImage: "linear-gradient(120deg, #3a1e48, #1c274f)",
            color: "#9ba1a6",
            fontFamily: "Satoshi",
          }}
        >
          <div tw="w-full h-full flex justify-between items-center rounded-2xl shadow-lg px-4 bg-[#202425] border-2 border-[#3a3f42]">
            <div tw="flex flex-col justify-between items-center mx-auto w-1/2 h-[484px]">
              <div tw="flex flex-col items-center">
                <h2
                  tw="text-4xl"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #bf7af0, #849dff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  moviexyz
                </h2>
                <p tw="-mt-2 text-2xl text-center max-w-[425px]">
                  explore and discover random movies in the click of a button
                </p>
              </div>
              <div
                tw="text-lg"
                style={{
                  backgroundImage: "linear-gradient(240deg, #bf7af0, #849dff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                moviexyz.vercel.app
              </div>
            </div>
            <div tw="flex items-center justify-center w-[350px] h-[500px] bg-[#26292b] rounded-lg border-2 border-[#313538]">
              <div
                tw="text-[128px] font-bold"
                style={{
                  backgroundImage: "linear-gradient(180deg, #bf7af0, #849dff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                ?
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Satoshi",
            data: satoshiMediumFont,
            style: "normal",
            weight: 500,
          },
          {
            name: "Satoshi",
            data: satoshiBoldFont,
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
