import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';

export default function Quizz() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <Title>Quiz Details</Title>
      <p>Quizz ID: {router.query.id}</p>
    </div>
  );
}
