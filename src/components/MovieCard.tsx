import { useState } from "react";
import Image from "next/image";
import type { MovieResult } from "moviedb-promise";

const MovieCard = ({ poster_path, title, overview }: MovieResult) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border border-slate-6 bg-slate-2 p-4 shadow-md md:flex-row md:items-start">
        <div className="relative aspect-[2/3] overflow-hidden rounded-xl shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`Poster for the movie ${title}`}
            width={350}
            height={450}
            className={`motion-safe:duration-150 motion-safe:ease-productive-standard ${
              isLoading ? "blur-md grayscale" : "blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="flex max-w-sm flex-col gap-2">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-slate-11">{overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
