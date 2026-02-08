import { useSkillsFetch } from "@/features/filter/api/useSkillsFetch";
import { memo, useState } from "react";
import { useToggleFilter } from "../lib/useToggleFilters";
import type { SkillItem } from "../model/types";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";

const FilterCategory = () => {
  const [all, setAll] = useState(false);
  const { data } = useSkillsFetch<SkillItem>({ limit: all ? 14 : 5 });
  const { filters, setFilter } = useToggleFilter();
  return (
    <div>
      <h5 className={styles.title}>Категории вопросов</h5>
      {/* TODO: Если скрыть все, то активными выводятся сначала массив из data.question */}
      <ul className={styles.skills}>
        {data.map((skill) => {
          const active = filters.question.includes(skill.id)
            ? styles.active
            : "";
          return (
            <li
              key={skill.id}
              className={active}
              onClick={() => setFilter("question", skill.id)}
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
        }}
      >
        {/* TODO: Отслеживать isLoading состояние при подгрузке данных, чтобы
        текст не менялся сразу */}
        {all ? "Скрыть все" : "Показать все"}
      </button>
    </div>
  );
};

export default memo(FilterCategory);
