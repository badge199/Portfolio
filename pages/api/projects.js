
export default function handler(req, res) {
  const projects = [
    { id: '1', title: 'Amazing App', description: 'Details about Amazing App.' },
    { id: '2', title: 'Another Cool App', description: 'Details about Another Cool App.' },
  ];
  res.status(200).json(projects);
}
