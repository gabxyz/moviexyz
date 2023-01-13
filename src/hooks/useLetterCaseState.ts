import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LetterCaseState {
  letterCase: string;
  setLetterCase: (letterCase: string) => void;
}

const useLetterCaseState = create<LetterCaseState>()(
  persist(
    (set) => ({
      letterCase: "lowercase",
      setLetterCase: (letterCase: string) => set({ letterCase }),
    }),
    {
      name: "letter-case",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLetterCaseState;
