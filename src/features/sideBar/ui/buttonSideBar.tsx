import styles from "./style.module.css";

export const ButtonSideBar = ({ children }: { children: React.ReactNode }) => {
  return <button className={styles.buttonSideBar}>{children}</button>;
};
