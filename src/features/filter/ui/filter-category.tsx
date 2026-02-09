import { useSkillsFetch } from "@/features/filter/api/useSkillsFetch";
import { memo, useMemo, useState } from "react";
import { useToggleFilter } from "../lib/useToggleFilters";
import type { SkillItem } from "../model/types";
import { FilterButton } from "./filter-button";
import styles from "./style.module.css";

const FilterCategory = () => {
  const [all, setAll] = useState(false);
  const { data, isLoading, error } = useSkillsFetch<SkillItem>({ limit: 14 });
  const { filters, setFilter } = useToggleFilter();
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aSelected = filters.question.includes(a.id) ? 1 : 0;
      const bSelected = filters.question.includes(b.id) ? 1 : 0;

      if (aSelected !== bSelected) return bSelected - aSelected;

      return a.id - b.id;
    });
  }, [data, filters.question]);
  const visibleData = useMemo(() => {
    return all ? data : sortedData.slice(0, 5);
  }, [all, data, sortedData]);

  if (error) {
    console.error(error);
  }

  return (
    <div>
      <h5 className={styles.title}>Категории вопросов</h5>
      {!isLoading ? (
        <ul className={styles.skills}>
          {visibleData.map((skill) => {
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
      ) : (
        <p className={styles.skills}>Загрузка Категорий...</p>
      )}
      <button
        className={styles.link}
        onClick={() => {
          setAll((prev) => !prev);
        }}
      >
        {all && !isLoading ? "Скрыть все" : "Показать все"}
      </button>
    </div>
  );
};

export default memo(FilterCategory);
