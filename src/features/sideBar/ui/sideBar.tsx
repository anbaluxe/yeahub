import { useState } from "react";
import { configSvg } from "../assets/arhivatorSvg";
import { ButtonSideBar } from "./buttonSideBar";
import styles from "./style.module.css";
import logo from "/logo.png";

export const SideBar = () => {
  const [open, setOpen] = useState(true);
  const { home, activeSlider, profile } = configSvg();
  return (
    <div className={`${styles.sideBar} ${open ? styles.open : styles.closed}`}>
      <div className={styles.sideBarHeader}>
        <div className={styles.logo}>
          <button onClick={() => setOpen((prev) => !prev)}>
            <img src={logo} alt="logo" />
          </button>
          {open && <h2>Yeahub</h2>}
        </div>
        {open && (
          <button onClick={() => setOpen((prev) => !prev)}>
            <img src={activeSlider} alt="close" />
          </button>
        )}
      </div>
      <div className={styles.hero}>
        <ButtonSideBar>
          <img src={home} alt="home" className={styles.imgButton} />
          {open && <p>Главная</p>}
        </ButtonSideBar>
        <ButtonSideBar>
          <img src={profile} alt="home" className={styles.imgButton} />
          {open && <p>Мой профиль</p>}
        </ButtonSideBar>
      </div>
    </div>
  );
};
