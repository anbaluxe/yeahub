import styles from "./style.module.css";

export const FilterButton = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.button}>{children}</button>;
};
