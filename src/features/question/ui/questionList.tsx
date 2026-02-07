import { useQuestionFetch } from "@/shared/api/useQuestionFetch";
import type { QuestionItemType } from "../model/types";
import { QuestionItem } from "./questionItem";
import styles from "./style.module.css";

export const QuestionList = () => {
  const { data } = useQuestionFetch<QuestionItemType>();
  return (
    <div className={styles.questionList}>
      {data.map((question) => (
        <QuestionItem {...question} key={question.id} />
      ))}
    </div>
  );
};
