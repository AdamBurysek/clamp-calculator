import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import styles from "./ThemeSwitcher.module.css";
import { getCookie, setCookie } from "../../utils/cookies";

// TODO: "Make this with tailwind";

const Light = () => (
  <svg
    className={styles.svg}
    fill="none"
    height="14"
    viewBox="0 0 14 14"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Light</title>
    <path
      className={styles.stroke}
      d="M7 3V1M7 13V11M11 7H13M9.99985 4.01407L11.4141 2.59985M2.59751 11.4142L4.01172 10M4.01187 4.01419L2.59766 2.59998M11.4142 11.4142L10 10M1 7H3M9.49805 6.9999C9.49805 8.38061 8.37876 9.4999 6.99805 9.4999C5.61733 9.4999 4.49805 8.38061 4.49805 6.9999C4.49805 5.61919 5.61733 4.4999 6.99805 4.4999C8.37876 4.4999 9.49805 5.61919 9.49805 6.9999Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Dark = () => (
  <svg
    className={styles.svg}
    fill="none"
    height="12"
    viewBox="0 0 10 10"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Dark</title>
    <path
      className={styles.stroke}
      d="M8.59375 6.50049C8.82029 6.50049 9.04311 6.48371 9.26098 6.45129C8.65728 8.2244 6.97726 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.74132 2.16407 0.871309 4.3331 0.549078C4.1779 1.00475 4.09375 1.49309 4.09375 2.00049C4.09375 4.48577 6.10847 6.50049 8.59375 6.50049Z"
    />
  </svg>
);

const System = () => (
  <svg
    className={styles.svg}
    fill="none"
    height="11"
    viewBox="0 0 12 11"
    width="12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>System</title>
    <path
      className={styles.stroke}
      d="M6 10.5V8M6 10.5H8.5M6 10.5H3.5M6 8H11V1H1V8H6Z"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string | null>(null);
  // Fixing problem with floating slider when pages is changed
  const [duration, setDuration] = useState(0);

  const handleThemeButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDuration(1);
    setTheme(e.currentTarget.id);
    setTimeout(() => setDuration(0), 100);
  };

  useEffect(() => {
    const initialTheme = getCookie("theme") || "system";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.dataset.theme = theme;
      setCookie("theme", theme, 0.5);
    }
  }, [theme]);

  return (
    <div className={styles.themeSwitcher} data-theme={theme}>
      <button
        aria-label="Theme Mode Light"
        className={styles.button}
        id="light"
        onClick={handleThemeButtonClick}
        type="button"
      >
        <Light />
      </button>
      <button
        aria-label="Theme Mode System"
        className={styles.button}
        id="system"
        onClick={handleThemeButtonClick}
        type="button"
      >
        <System />
      </button>
      <button
        aria-label="Theme Mode Dark"
        className={styles.button}
        id="dark"
        onClick={handleThemeButtonClick}
        type="button"
      >
        <Dark />
      </button>
      <motion.div className={styles.slider} layout transition={{ duration, type: "spring" }} />
    </div>
  );
};

export default ThemeSwitcher;
