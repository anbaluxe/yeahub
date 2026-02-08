import { useFilterStore } from "../model/filterStore";

export const useToggleFilter = () => {
  const filters = useFilterStore((state) => state.filters);
  const setFilter = useFilterStore((state) => state.setFilter);
  const setSearch = useFilterStore((state) => state.setSearch);

  return { filters, setFilter, setSearch };
};
