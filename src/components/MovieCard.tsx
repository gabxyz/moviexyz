import { useState } from "react";
import Image from "next/image";

interface MovieCardProps {
  poster_path: string;
  title: string;
  overview: string;
}

const MovieCard = ({ poster_path, title, overview }: MovieCardProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className="flex w-[800px] justify-between rounded-xl bg-gray-4 p-4 shadow-md">
        <div className="relative h-[450px] w-[300px] overflow-hidden rounded-xl shadow-md ">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`Poster for the movie ${title}`}
            fill
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
