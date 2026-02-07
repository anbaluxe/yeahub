import DOMPurify from "dompurify";
import hljs from "highlight.js/lib/common";
import { useEffect, useRef } from "react";
import styles from "../ui/style.module.css";

export const HtmlContent = ({
  html,
  active,
}: {
  html: string;
  active: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const safe = DOMPurify.sanitize(html);
  useEffect(() => {
    if (!active) return;

    const root = ref.current;
    if (!root) return;

    // Маппим язык TSX перед highlightAll
    root.querySelectorAll("code.language-typescriptreact").forEach((el) => {
      el.classList.remove("language-typescriptreact");
      el.classList.add("language-tsx");
    });
    root.querySelectorAll("code.language-javascriptreact").forEach((el) => {
      el.classList.remove("language-javascriptreact");
      el.classList.add("language-jsx");
    });
    root.querySelectorAll("code.language-javascript").forEach((el) => {
      el.classList.remove("language-javascript");
      el.classList.add("language-js");
    });
    root.querySelectorAll("code.language-typescript").forEach((el) => {
      el.classList.remove("language-typescript");
      el.classList.add("language-ts");
    });
    hljs.highlightAll();
  }, [html, active]);

  return (
    <div
      ref={ref}
      className={styles.richContent}
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
};
