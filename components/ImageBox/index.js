import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function ImageBox() {
  const [themeNum, setThemeNum] = useState(1);

  const themes = {
    1: "day blue",
    2: "night blue",
    3: "day red",
    4: "night red",
    5: "day green",
    6: "night green",
  };

  const toggleSwitch = () => {
    setThemeNum(state => ((state % 6) + 1));
    const $html = document.querySelector("html");
    $html.className = themes[(themeNum % 6) + 1];
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className={styles.imgBox}
      onClick={toggleSwitch}
    >
      <img src="/prof.jpg" alt="profile_pic" width="100%" height="100%"/>
    </motion.div>
  );
}
