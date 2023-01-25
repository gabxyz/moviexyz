import { useState } from "react";
import Image from "next/image";
import type { MovieResponse } from "moviedb-promise";

import { Calendar, Clock, Twitter, Clapperboard } from "lucide-react";

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
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-6 bg-slate-2 p-2 shadow-md md:h-[495px] md:flex-row md:items-start">
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`Poster for the movie ${title}`}
            width={400}
            height={550}
            className={`rounded-lg shadow-md motion-safe:duration-150 motion-safe:ease-productive-standard ${
              isLoading ? "blur-md grayscale" : "blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="flex h-full max-w-sm flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="font-medium text-slate-11">{genresArr}</p>
              </div>
            </div>
            <p className="mt-2 overflow-auto text-slate-11">{overview}</p>
          </div>
          <div className="flex items-center gap-2 text-slate-11">
            <div className="flex items-center gap-2 rounded-full border border-slate-6 bg-slate-3 py-1.5 px-4 text-xs font-medium shadow">
              <Calendar size={16} />
              <p>{release_date?.slice(0, 4)}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-6 bg-slate-3 py-1.5 px-3 text-xs font-medium shadow">
              <Clock size={16} />
              <p>{runtime} min</p>
            </div>
          </div>
          <div className="mt-auto flex items-end justify-end gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/watch?v=${movieTrailer}`}
              className="inline-flex h-8 items-center gap-2 rounded-lg border border-slate-7 bg-slate-3 px-3 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard "
            >
              <Clapperboard size={16} />
              Movie trailer
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=""
              className="inline-flex h-8 items-center gap-1 self-end rounded-lg border border-slate-7 bg-slate-3 px-2.5 text-sm font-medium shadow hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-expressive-standard"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
