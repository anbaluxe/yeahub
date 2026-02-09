import { useFilterStore } from "@/features/filter";
import { useQuestionFetch } from "@/shared/api/useQuestionFetch";
import { useEffect, useState } from "react";
import type { QuestionItemType } from "../model/types";
import { Pagination } from "./pagination";
import { QuestionItem } from "./questionItem";
import styles from "./style.module.css";

const limit = 10;

export const QuestionList = () => {
  const [activePage, setActivePage] = useState(1);
  const filters = useFilterStore((s) => s.filters);
  const resetFilters = useFilterStore((s) => s.resetFilters);
  useEffect(() => setActivePage(1), [filters]);
  const { data, total, isLoading, error } = useQuestionFetch<QuestionItemType>({
    limit,
    page: activePage,
    filters,
  });

  if (data.length === 0 && !isLoading) {
    return (
      <div className={styles.questionList}>
        <h3>К сожалению по запросу ничего не найдено</h3>
        <button onClick={resetFilters}>Сбросить фильтры</button>
      </div>
    );
  }
  if (error) {
    console.error(error);
  }
  return (
    <>
      {!isLoading ? (
        <div className={styles.questionList}>
          {data.map((question) => (
            <QuestionItem {...question} key={question.id} />
          ))}
          <Pagination
            total={total}
            onClick={setActivePage}
            activePage={activePage}
            limit={limit}
          />
        </div>
      ) : (
        <div className={styles.questionList}>
          <p>Загрузка вопросов...</p>
        </div>
      )}
    </>
  );
};
