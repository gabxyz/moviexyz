import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconCalendar,
  IconHourglass,
} from "@tabler/icons-react";
import clsx from "clsx";
import type { MovieResponse } from "moviedb-promise";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const router = useRouter();
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
      <div className="flex flex-col items-center justify-between rounded-xl border border-mauve-7 bg-mauve-3 shadow-md md:h-[600px] md:flex-row md:items-stretch">
        <div className="aspect-[2/3] w-fit rounded-xl rounded-b-none border-b border-mauve-7 md:rounded-r-none md:rounded-l-xl md:border-b-0 md:border-r">
          <Image
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={`Poster for the movie ${title}`}
            width={400}
            height={600}
            className={clsx(
              isLoading ? "blur-sm grayscale" : "blur-none grayscale-0",
              "h-full overflow-hidden rounded-t-xl shadow motion-safe:duration-200 motion-safe:ease-productive-standard md:rounded-xl md:rounded-r-none"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="flex w-full flex-col gap-4 px-4 py-2">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="-mt-1 text-sm text-mauve-11">{genresArr}</p>
            {overview.length > 500 ? (
              <p className="mt-2 text-sm text-mauve-11">
                {!showMore ? shortOverview : overview}
                <button
                  className="ml-1 text-[13px] font-semibold text-mauve-12 hover:opacity-80 motion-safe:duration-200 motion-safe:ease-productive-standard"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "show less" : "show more"}
                </button>
              </p>
            ) : (
              <p className="mt-2 text-sm text-mauve-11">{overview}</p>
            )}
          </div>
          <div className="flex items-center gap-2 text-mauve-11">
            <div className="flex items-center gap-1.5 rounded-2xl border border-mauve-6 bg-mauve-4 py-1 px-3 text-xs shadow">
              <IconCalendar size={15} />
              <p>{release_date?.slice(0, 4)}</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-2xl border border-mauve-6 bg-mauve-4 py-1 px-3 text-xs shadow">
              <IconHourglass size={15} />
              <p>{runtime} min</p>
            </div>
          </div>
          <div className="mt-8 flex items-end justify-end gap-4 md:mt-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/watch?v=${movieTrailer}`}
              className={clsx(
                "inline-flex h-7 items-center gap-1 px-3 text-sm text-mauve-11",
                "rounded-lg border border-mauve-7 bg-mauve-4 shadow",
                "hover:border-mauve-8 hover:bg-mauve-5 hover:text-mauve-12 motion-safe:duration-200 motion-safe:ease-productive-standard"
              )}
            >
              <IconBrandYoutube size={16} />
              trailer
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?text=${title}%20%0A%0A&url=https://moviexyz.vercel.app${router.asPath}`}
              className={clsx(
                "inline-flex h-7 items-center gap-1 px-3 text-sm text-mauve-11",
                "rounded-lg border border-mauve-7 bg-mauve-4 shadow",
                "hover:border-mauve-8 hover:bg-mauve-5 hover:text-mauve-12 motion-safe:duration-200 motion-safe:ease-productive-standard"
              )}
            >
              <IconBrandTwitter size={16} />
              share
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
