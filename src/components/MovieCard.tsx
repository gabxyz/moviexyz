import { useState } from "react";
import Image from "next/image";
import type { MovieResponse } from "moviedb-promise";
import {
  CalendarIcon,
  ClockIcon,
  TwitterLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

interface MovieCardProps extends MovieResponse {
  movieTrailer: string;
}

const MovieCard = ({
  poster_path,
  title,
  overview,
  genres,
  release_date,
  runtime,
  movieTrailer,
}: MovieCardProps) => {
  const [isLoading, setLoading] = useState(true);
  const genresArr = genres
    ?.map((item) => {
      return item.name;
    })
    .slice(0, 3)
    .join(", ");

  return (
    <>
      <div className="mx-auto flex max-w-sm flex-col items-center justify-between gap-4 rounded-xl border border-slate-6 bg-slate-2 p-4 shadow-md md:h-[485px] md:max-w-full md:flex-row md:items-start">
        <div className="relative aspect-[2/3] self-center overflow-hidden rounded-lg shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`Poster for the movie ${title}`}
            width={350}
            height={450}
            className={`rounded-lg shadow-md motion-safe:duration-150 motion-safe:ease-productive-standard ${
              isLoading ? "blur-md grayscale" : "blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="flex h-full max-w-sm flex-col gap-4">
          <div className="flex flex-col leading-none">
            <h1 className="font-semibold">{title}</h1>
            <p className="text-sm font-medium text-slate-11">{genresArr}</p>
            <p className="mt-2 max-h-72 overflow-auto text-sm text-slate-11">
              {overview}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-slate-6 bg-slate-3 py-1.5 px-4 text-xs shadow">
              <CalendarIcon />
              <p>{release_date?.slice(0, 4)}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-6 bg-slate-3 py-1.5 px-3 text-xs shadow">
              <ClockIcon />
              <p>{runtime} min</p>
            </div>
          </div>
          <div className="mt-4 flex h-full items-end gap-2 self-end">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=""
              className="inline-flex h-8 items-center gap-2 rounded-lg border border-slate-6 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
            >
              <TwitterLogoIcon />
              Share
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/watch?v=${movieTrailer}`}
              className="inline-flex h-8 items-center gap-2 rounded-lg border border-slate-6 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard "
            >
              <VideoIcon />
              Trailer
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
