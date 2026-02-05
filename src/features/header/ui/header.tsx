import settingsIcon from "../assets/settings.svg";
import userIcon from "../assets/user.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header_list}>
        <li>
          <img src={settingsIcon} alt="settings" />
        </li>
        <li className={styles.user}>
          <img src={userIcon} alt="user" />
        </li>
      </ul>
    </header>
  );
};
