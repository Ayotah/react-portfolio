import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__code">404</div>
      <h1 className="notfound__title">Page not found</h1>
      <p className="notfound__desc">The route you're looking for doesn't exist.</p>
      <Link to="/" className="notfound__link">← Back to Home</Link>
    </main>
  );
}
