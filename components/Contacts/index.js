import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from "framer-motion";
import cn from "classnames";

export default function Contact({ className, children }) {
  return (
    <footer className={cn(styles.contacts, className)}>
      <Link href="mailto:muratakca.mt@gmail.com">
        <a>
          <motion.img
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            src="/gmail.png"
            alt="gmail"
            height="38"
            width="38" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/mrtakca/">
        <a>
          <motion.img
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            src="/linkedin.png"
            alt="gmail"
            height="36"
            width="36" /></a>
      </Link>
      <Link href="https://github.com/muratsgt/">
        <a>
          <motion.img
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            src="/github.png"
            alt="gmail"
            height="38"
            width="38" /></a>
      </Link>
      {children}
    </footer>);
}
