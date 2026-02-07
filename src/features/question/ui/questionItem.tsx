import { useState } from "react";
import arrowIcon from "../assets/arrow.svg";
import { HtmlContent } from "../lib/HtmlContent";
import type { QuestionItemType } from "../model/types";
import styles from "./style.module.css";

export const QuestionItem = ({
  title,
  rate,
  complexity,
  shortAnswer,
}: QuestionItemType) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`${styles.questionItem} ${active ? styles.active : ""}`}>
      <div className={styles.activeTitle}>
        <h2>{title}</h2>
        <button
          onClick={() => setActive(!active)}
          className={`${styles.arrowButton} ${active ? styles.activeButton : ""}`}
        >
          <img src={arrowIcon} alt="Arrow" />
        </button>
      </div>

      <div className={`${styles.content} ${active ? styles.contentOpen : ""}`}>
        <div className={styles.contentInner}>
          <div className={styles.activeInfo}>
            <p className={styles.activeInfoItem}>
              Рейтинг: <span className={styles.purpleNumber}>{rate}</span>
            </p>
            <p className={styles.activeInfoItem}>
              Уровень: <span className={styles.purpleNumber}>{complexity}</span>
            </p>
          </div>
          {/* TODO: Сделать кнопку копирование кода */}
          <HtmlContent html={shortAnswer} active={active} />
        </div>
      </div>
    </div>
  );
};
