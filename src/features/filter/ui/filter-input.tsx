import { memo } from "react";
import searchIcon from "../assets/search.svg";
import styles from "./style.module.css";

const FilterInput = () => {
  return (
    <div className={styles.input}>
      <img src={searchIcon} alt="search icon" className={styles.icon} />
      <input type="text" placeholder="Введите запрос..." />
    </div>
  );
};

export default memo(FilterInput);
