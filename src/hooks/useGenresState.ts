import create from "zustand";

interface GenresListState {
  genreIdList: string[];
  setGenreIdList: (selectedGenres: string[]) => void;
}

const useGenresState = create<GenresListState>((set) => ({
  genreIdList: [],
  setGenreIdList: (genreIdList: string[]) => set({ genreIdList }),
}));

export default useGenresState;
