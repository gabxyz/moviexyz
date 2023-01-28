import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import type { MovieResponse } from "moviedb-promise";
import { Calendar, Clock, Twitter, Clapperboard } from "lucide-react";

interface MovieCardProps extends MovieResponse {
  movieTrailer: string;
  overview: string;
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
  const [showMore, setShowMore] = useState(false);
  const genresArr = genres
    ?.map((item) => {
      return item.name;
    })
    .slice(0, 3)
    .join(", ");

  const shortOverview = overview?.slice(0, 500) + "...";

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-6 bg-slate-2 p-2 shadow-md md:flex-row md:items-stretch">
        <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`Poster for the movie ${title}`}
            width={400}
            height={550}
            className={clsx(
              isLoading ? "blur-md grayscale" : "blur-0 grayscale-0",
              "rounded-lg shadow-md motion-safe:duration-150 motion-safe:ease-productive-standard"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="flex max-w-sm flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-medium text-slate-11">{genresArr}</p>
            {overview.length > 500 ? (
              <p className="mt-2 text-slate-11">
                {!showMore ? shortOverview : overview}
                <button
                  className="ml-1 text-sm font-medium text-slate-12 hover:opacity-80 motion-safe:duration-300 motion-safe:ease-productive-standard"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "show less" : "show more"}
                </button>
              </p>
            ) : (
              <p className="mt-2 text-slate-11">{overview}</p>
            )}
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
          <div className="mt-8 flex items-end justify-end gap-2 md:mt-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/watch?v=${movieTrailer}`}
              className={clsx(
                "inline-flex h-8 items-center gap-2 px-3 text-sm font-medium",
                "rounded-lg border border-slate-7 bg-slate-3 shadow",
                "hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-productive-standard"
              )}
            >
              <Clapperboard size={16} />
              Movie trailer
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=""
              className={clsx(
                "inline-flex h-8 items-center gap-2 px-3 text-sm font-medium",
                "rounded-lg border border-slate-7 bg-slate-3 shadow",
                "hover:border-slate-8 hover:bg-slate-4 motion-safe:duration-300 motion-safe:ease-productive-standard"
              )}
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
