
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects').then((response) => setProjects(response.data));
  }, []);

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Link href={`/projects/${project.id}`} key={project.id}>
          <a className={styles.projectCard}>{project.title}</a>
        </Link>
      ))}
    </div>
  );
}
