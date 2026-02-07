import { FilterCategory } from "./filter-category";
import { FilterInput } from "./filter-input";
import { FilterLevel } from "./filter-level";
import { FilterRating } from "./filter-rating";
import { FilterStatus } from "./filter-status";
import styles from "./style.module.css";

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <FilterInput />
      <FilterCategory />
      <FilterLevel />
      <FilterRating />
      <FilterStatus />
    </div>
  );
};
