import { memo, useEffect, useState } from "react";
import searchIcon from "../assets/search.svg";
import { useToggleFilter } from "../lib/useToggleFilters";
import styles from "./style.module.css";

const FilterInput = () => {
  const [value, setValue] = useState("");
  const { setSearch } = useToggleFilter();
  useEffect(() => {
    const id = setTimeout(() => setSearch(value), 400);
    return () => clearTimeout(id);
  }, [value, setSearch]);
  return (
    <div className={styles.input}>
      <img src={searchIcon} alt="search icon" className={styles.icon} />
      <input
        type="text"
        value={value}
        placeholder="Введите запрос..."
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default memo(FilterInput);
