import styles from './style.module.scss';
import { motion } from "framer-motion";

function Project({ children, title, coloreffect }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className={styles.project}
            coloreffect={coloreffect}
        >
            <h3>
                {title}

            </h3>
            <h4>{children}</h4>
        </motion.div >
    )
}

export default Project
