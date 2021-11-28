import styles from './style.module.scss';
import { motion } from 'framer-motion';

function Skill({ children, imgsrc, spin, move, scale, ...props }) {
    return (
        <div className={styles.skill} {...props}>
            <p >{children}</p>
            <motion.img
                animate={
                    (spin && { rotate: [0, 360] })
                    || (move && { x: [0, 10, -10, 0] })
                    || (scale && {scale: [1, 1.4, 0.8, 1]})
                }
                transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                }}
                src={imgsrc}
                alt={imgsrc}
                width="36px"
                height="36px"
            />
        </div>
    )
}

export default Skill
