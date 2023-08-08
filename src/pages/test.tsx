import { Link } from 'ice';

export default function TestPage() {
  console.log('test page');
  return (
    <>
      <h3>Test Page</h3>
      <Link to='/'>go to home</Link>
    </>
  );
}
