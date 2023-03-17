import {
  IconArrowRight,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCalendar,
  IconHourglass,
} from "@tabler/icons-react";
import clsx from "clsx";
import type { MovieResponse, MovieResult } from "moviedb-promise";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface MovieCardProps extends MovieResponse {
  movieTrailer: string;
  overview: string;
  recommendedMovies: MovieResult[];
}

const MovieCard = ({
  poster_path,
  title,
  overview,
  genres,
  release_date,
  runtime,
  movieTrailer,
  recommendedMovies,
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
      <div className="flex flex-col items-center justify-between gap-2 rounded-xl border border-mauve-7 bg-mauve-3 shadow-md md:h-[600px] md:flex-row md:items-stretch">
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
        <div className="flex w-full max-w-md flex-col gap-4 p-3 md:pl-1 lg:pl-0">
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold leading-tight opacity-90">
                  {title}
                </h2>
                <p className="text-[15px] text-mauve-11">{genresArr}</p>
              </div>
              <a
                aria-label={`Share ${title} on twitter`}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/intent/tweet?text=${title}%0D%0Dhttps://moviexyz.vercel.app${router.asPath}`}
                className={clsx(
                  "flex items-center gap-1 py-1 px-3 text-sm font-semibold text-mauve-12 opacity-70 hover:opacity-100",
                  "rounded-xl border border-mauve-7 bg-mauve-5 shadow hover:border-mauve-8",
                  "motion-safe:duration-200 motion-safe:ease-productive-standard"
                )}
              >
                <IconBrandTwitter size={16} />
                <p>share</p>
              </a>
            </div>
            {overview.length > 500 ? (
              <p className="mt-4 text-[15px] text-mauve-11">
                {!showMore ? shortOverview : overview}
                <button
                  className="ml-1 text-sm font-semibold text-mauve-12 opacity-90 hover:opacity-70 motion-safe:duration-200 motion-safe:ease-productive-standard"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "show less" : "show more"}
                </button>
              </p>
            ) : (
              <p className="mt-4 text-[15px] text-mauve-11">{overview}</p>
            )}
          </div>
          <div className="flex w-full flex-col justify-between gap-6 text-mauve-11">
            <div className="flex gap-2">
              <div
                className="flex items-center gap-1.5 rounded-2xl border border-mauve-6 bg-mauve-4 py-1 px-3 text-xs shadow"
                aria-label="Movie release date"
              >
                <IconCalendar size={15} />
                <p>{release_date?.slice(0, 4)}</p>
              </div>
              <div
                className="flex items-center gap-1.5 rounded-2xl border border-mauve-6 bg-mauve-4 py-1 px-3 text-xs shadow"
                aria-label="Movie duration time"
              >
                <IconHourglass size={15} />
                <p>{runtime} min</p>
              </div>
            </div>
            <a
              className={clsx(
                "group ml-1 inline-flex w-fit items-center truncate text-[15px] font-semibold text-mauve-12 opacity-70",
                "border-b border-dotted border-mauve-10",
                "hover:opacity-90 motion-safe:duration-200 motion-safe:ease-productive-standard"
              )}
              aria-label={`Watch ${title}'s trailer on youtube`}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/watch?v=${movieTrailer}`}
            >
              <IconBrandYoutube size={20} className="mr-px" />
              <p className="mx-1 truncate">Watch the trailer</p>
              <IconArrowRight
                size={16}
                className="flex-none text-mauve-11 group-hover:-rotate-45  motion-safe:duration-200 motion-safe:ease-productive-standard"
              />
            </a>
          </div>
          {recommendedMovies.length > 0 && (
            <div className="ml-1 flex h-full flex-col justify-end">
              <h3 className="my-4 text-lg font-semibold opacity-90">
                Similar to this
              </h3>
              <div className="mb-1.5 flex flex-col gap-3 md:mb-0">
                {recommendedMovies.map((movie) => (
                  <a
                    key={movie.id}
                    className={clsx(
                      "group inline-flex w-fit max-w-full items-center justify-start truncate text-[15px] font-medium opacity-70",
                      "underline decoration-mauve-11 decoration-dashed decoration-from-font underline-offset-2",
                      "hover:opacity-90 motion-safe:duration-200 motion-safe:ease-productive-standard"
                    )}
                    aria-label={movie.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://moviexyz.vercel.app/movie/${movie.id}`}
                  >
                    <p className="mr-1 truncate">{movie.title}</p>
                    <IconArrowRight
                      size={16}
                      className="mr-3 flex-none text-mauve-11 group-hover:translate-x-1 motion-safe:duration-200 motion-safe:ease-productive-standard"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
