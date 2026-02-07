import { memo } from "react";
import { useToggleFilter } from "../lib/useToggleFilters";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";
const data = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
  { id: 4, title: "4" },
  { id: 5, title: "5" },
];

const FilterRating = () => {
  const { filters, toggleFilter } = useToggleFilter();
  return (
    <div>
      <h5 className={styles.title}>Рейтинг</h5>
      <ul className={styles.skills}>
        {data.map((rating) => {
          const active = rating.title === filters.rating ? styles.active : "";
          return (
            <li
              key={rating.id}
              className={active}
              onClick={() => toggleFilter("rating", rating.title)}
            >
              <FilterButton>{rating.title}</FilterButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(FilterRating);
