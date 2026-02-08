import type { QuestionFilters } from "@/shared/model/question-filters";
import { create } from "zustand";
import type { QuestionFilterKey } from "./types";

type FilterStore = {
  filters: QuestionFilters;
  setFilter: <K extends QuestionFilterKey>(
    key: K,
    value: QuestionFilters[K],
  ) => void;
  setSearch: (value: string) => void;
  resetFilters: () => void;
};

const initialFilters: QuestionFilters = {
  question: null,
  level: null,
  rating: null,
  status: "Все",
  search: "",
};

export const useFilterStore = create<FilterStore>((set) => ({
  filters: initialFilters,
  setFilter: (key, value) =>
    set((state) => ({ filters: { ...state.filters, [key]: value } })),
  setSearch: (value) =>
    set((state) => ({ filters: { ...state.filters, search: value } })),
  resetFilters: () => set({ filters: initialFilters }),
}));
