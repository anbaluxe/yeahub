import { useToggleFilter } from "../lib/useToggleFilters";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";

export const FilterStatus = () => {
  const data = [
    { id: 1, title: "Изученные" },
    { id: 2, title: "Не изученные" },
    { id: 3, title: "Все" },
    { id: 4, title: "Только избранные" },
  ];
  const { filters, toggleFilter } = useToggleFilter();
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
              onClick={() => toggleFilter("status", status.title)}
            >
              <FilterButton>{status.title}</FilterButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
