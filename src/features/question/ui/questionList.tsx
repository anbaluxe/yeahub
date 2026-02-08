import { useQuestionFetch } from "@/shared/api/useQuestionFetch";
import { useState } from "react";
import type { QuestionItemType } from "../model/types";
import { Pagination } from "./pagination";
import { QuestionItem } from "./questionItem";
import styles from "./style.module.css";

const limit = 10;

export const QuestionList = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, total } = useQuestionFetch<QuestionItemType>({
    limit: limit,
    page: activePage,
  });
  return (
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
  );
};
