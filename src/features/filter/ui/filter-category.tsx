import { useSkillsFetch } from "@/features/filter/api/useSkillsFetch";
import { useState } from "react";
import { useToggleFilter } from "../lib/useToggleFilters";
import type { SkillItem } from "../model/types";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";

export const FilterCategory = () => {
  const [all, setAll] = useState(false);
  const { data } = useSkillsFetch<SkillItem>({ limit: all ? 14 : 5 });
  const { filters, toggleFilter } = useToggleFilter();
  return (
    <div>
      <h5 className={styles.title}>Категории вопросов</h5>
      <ul className={styles.skills}>
        {data.map((skill) => {
          const active = skill.id === filters.question ? styles.active : "";
          return (
            <li
              key={skill.id}
              className={active}
              onClick={() => toggleFilter("question", skill.id)}
            >
              <FilterButton>{skill.title}</FilterButton>
            </li>
          );
        })}
      </ul>
      <button
        className={styles.link}
        onClick={() => {
          setAll(!all);
          toggleFilter("question", 6);
        }}
      >
        {/* TODO: Отслеживать isLoading состояние при подгрузке данных, чтобы
        текст не менялся сразу */}
        {all ? "Скрыть все" : "Показать все"}
      </button>
    </div>
  );
};
