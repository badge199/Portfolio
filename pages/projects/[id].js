
import { useRouter } from 'next/router';
import styles from '../../styles/Project.module.css';

const projects = [
  { id: '1', title: 'Amazing App', description: 'A fantastic app that does amazing things.' },
  { id: '2', title: 'Another Cool App', description: 'Another cool project for the portfolio.' },
];

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found!</p>;

  return (
    <div className={styles.container}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
