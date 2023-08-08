import { Link } from 'ice';

export default function HomePage() {
  console.log('home page');
  return (
    <>
      <h3>Home Page</h3>
      <Link to='/test'>go to test</Link>
    </>
  );
}
