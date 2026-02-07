import { useState } from "react";

export const useToggleFilter = () => {
  const [filters, setFilters] = useState({
    question: 6,
    level: "1-3",
    rating: "",
    status: "Все",
  });

  const toggleFilter = (type: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  return { filters, toggleFilter };
};
