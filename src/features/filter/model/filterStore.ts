import type { QuestionFilters } from "@/shared/model/question-filters";
import { create } from "zustand";
import type { QuestionFilterKey } from "./types";

type FilterStore = {
  filters: QuestionFilters;
  toggleFilterValue: <K extends QuestionFilterKey>(
    key: K,
    value: string | number,
  ) => void;
  setSearch: (value: string) => void;
  resetFilters: () => void;
};

const initialFilters: QuestionFilters = {
  question: [],
  level: [],
  rating: [],
  status: ["Все"],
  search: "",
};

export const useFilterStore = create<FilterStore>((set) => ({
  filters: initialFilters,
  toggleFilterValue: (key, value) =>
    set((state) => {
      const current = state.filters[key] as Array<string | number>;
      const exists = current.includes(value);

      return {
        filters: {
          ...state.filters,
          [key]: exists
            ? current.filter((item) => item !== value)
            : [...current, value],
        },
      };
    }),
  setSearch: (value) =>
    set((state) => ({ filters: { ...state.filters, search: value } })),
  resetFilters: () => set({ filters: initialFilters }),
}));
