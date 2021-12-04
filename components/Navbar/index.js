import styles from './style.module.scss';
import { motion } from "framer-motion";
import { useState } from 'react';
import cn from "classnames";

export default function Navbar({ onClick, children }) {
  const [selected, setSelected] = useState("About");

  const handleClick = (e) => {
    console.log(`e`, e)
    switch (e.target.innerText) {
      case "About":
        onClick(1);
        break;
      case "My Work":
        onClick(2);
        break;
      case "Skills":
        onClick(3);
        break;
      default:
        break;
    }
    setSelected(e.target.innerText);
  }


  return (
    <div className={styles.container}>
      <motion.button
        onClick={handleClick}
        className={cn(styles.butto, (selected === "About") && styles.selected)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}>About</motion.button>
      <motion.button
        onClick={handleClick}
        className={cn(styles.butto, (selected === "My Work") && styles.selected)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}>My Work</motion.button>
      <motion.button
        onClick={handleClick}
        className={cn(styles.butto, (selected === "Skills") && styles.selected)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}>Skills</motion.button>
      {children}
    </div >);
}
