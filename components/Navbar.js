import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/quizzes">
        <a>Quizzes</a>
      </Link>
      <Link href="/users/[id]" as={'/users/${5}'}>
        <a>Users N°5</a>
      </Link>
    </nav>
  );
}
