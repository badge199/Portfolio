
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={styles.header}
    >
      <h1>Nitik Adhikari</h1>
      <p>Welcome to my animated portfolio website!</p>
    </motion.header>
  );
}
