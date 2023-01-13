import { useState } from "react";
import Image from "next/image";
import type { MovieResponse } from "moviedb-promise";

const MovieCard = ({ poster_path, title, overview, genres }: MovieResponse) => {
  const [isLoading, setLoading] = useState(true);
  const genresArr = genres
    ?.map((item) => {
      return item.name;
    })
    .slice(0, 3)
    .join(", ");

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
        <div className="flex max-w-sm flex-col">
          <h1 className="font-semibold">{title}</h1>
          <p className="text-sm font-medium text-slate-11">{genresArr}</p>
          <p className="mt-4 text-sm text-slate-11">{overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
