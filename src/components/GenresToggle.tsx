import * as ToggleGroup from "@radix-ui/react-toggle-group";
import cx from "classnames";
import useGenresState from "../hooks/useGenresState";

interface GenreItem {
  value: string;
  label: string;
}

const genreOptions: GenreItem[] = [
  { value: "28", label: "Action" },
  { value: "12", label: "Adventure" },
  { value: "16", label: "Animation" },
  { value: "35", label: "Comedy" },
  { value: "80", label: "Crime" },
  { value: "99", label: "Documentary" },
  { value: "18", label: "Drama" },
  { value: "10751", label: "Family" },
  { value: "14", label: "Fantasy" },
  { value: "36", label: "History" },
  { value: "27", label: "Horror" },
  { value: "10402", label: "Music" },
  { value: "9648", label: "Mystery" },
  { value: "10749", label: "Romance" },
  { value: "878", label: "Science Fiction" },
  { value: "10770", label: "TV Movie" },
  { value: "53", label: "Thriller" },
  { value: "10752", label: "War" },
  { value: "37", label: "Western" },
];

const GenresToggle = () => {
  const { genreIdList, setGenreIdList } = useGenresState();

  const handleValueChange = (selectedGenres: string[]) => {
    setGenreIdList(selectedGenres);
  };

  return (
    <ToggleGroup.Root
      type="multiple"
      aria-label="Genres selection"
      className="flex flex-wrap gap-2 md:justify-between"
      value={genreIdList}
      onValueChange={handleValueChange}
    >
      {genreOptions.map(({ value, label }) => (
        <ToggleGroup.Item
          key={`group-item-${value}-${label}`}
          value={value}
          aria-label={label}
          className={cx(
            "group rdx-state-on:border-slate-8 rdx-state-on:bg-slate-6 rdx-state-on:text-slate-12 ",
            "bg-slate-3 text-sm font-medium text-slate-11",
            "h-8 rounded-xl border border-slate-7 px-2.5 shadow",
            "hover:border-slate-8 hover:bg-slate-4",
            "motion-safe:duration-200 motion-safe:ease-expressive-standard"
          )}
        >
          {label}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};

export default GenresToggle;