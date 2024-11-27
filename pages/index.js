
import Header from '../components/Header';
import Projects from '../components/Projects';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Projects />
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Nitik Adhikari. All rights reserved.</p>
      </footer>
    </div>
  );
}
