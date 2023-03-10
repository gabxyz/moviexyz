import create from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface GenresListState {
  genreIdList: string[];
  setGenreIdList: (selectedGenres: string[]) => void;
}

const useGenresState = create<GenresListState>()(
  persist(
    (set) => ({
      genreIdList: [],
      setGenreIdList: (genreIdList: string[]) => set({ genreIdList }),
    }),
    {
      name: "genreIdList",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGenresState;
