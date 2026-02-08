import { memo } from "react";
import { useToggleFilter } from "../lib/useToggleFilters";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";
const data = [
  { id: 1, title: "Изученные", status: null },
  { id: 2, title: "Не изученные", status: null },
  { id: 3, title: "Все", status: "Все" },
  { id: 4, title: "Только избранные", status: null },
];

const FilterStatus = () => {
  const { filters, setFilter } = useToggleFilter();
  return (
    <div>
      <h5 className={styles.title}>Статус</h5>
      <ul className={styles.skills}>
        {data.map((status) => {
          const active = status.title === filters.status ? styles.active : "";
          return (
            <li
              key={status.id}
              className={active}
              onClick={() => setFilter("status", status.status)}
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
