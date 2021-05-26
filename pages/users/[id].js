import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';

export default function Users() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <Title>User Details</Title>
      <p>User ID: {router.query.id}</p>
    </div>
  );
}
