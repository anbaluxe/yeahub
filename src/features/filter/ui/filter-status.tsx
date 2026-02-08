import { memo } from "react";
import { useToggleFilter } from "../lib/useToggleFilters";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";
const data = [
  { id: 1, title: "Изученные" },
  { id: 2, title: "Не изученные" },
  { id: 3, title: "Все" },
  { id: 4, title: "Только избранные" },
];

const FilterStatus = () => {
  const { filters, setFilter } = useToggleFilter();
  return (
    <div>
      <h5 className={styles.title}>Статус</h5>
      <ul className={styles.skills}>
        {data.map((status) => {
          const active = filters.status.includes(status.title)
            ? styles.active
            : "";
          return (
            <li
              key={status.id}
              className={active}
              onClick={() => setFilter("status", status.title)}
            >
              <FilterButton>{status.title}</FilterButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(FilterStatus);
