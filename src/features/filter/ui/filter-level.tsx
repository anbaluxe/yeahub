import { memo } from "react";
import { useToggleFilter } from "../lib/useToggleFilters";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";
const data = [
  { id: 1, title: "1-3" },
  { id: 2, title: "4-6" },
  { id: 3, title: "7-8" },
  { id: 4, title: "9-10" },
];

const FilterLevel = () => {
  const { filters, setFilter } = useToggleFilter();
  return (
    <div>
      <h5 className={styles.title}>Уровень сложности</h5>
      <ul className={styles.skills}>
        {data.map((level) => {
          const active = level.title === filters.level ? styles.active : "";
          return (
            <li
              key={level.id}
              className={active}
              onClick={() => setFilter("level", level.title)}
            >
              <FilterButton>{level.title}</FilterButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(FilterLevel);
