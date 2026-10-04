import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
  usePageTitle('404');

  return (
    <div className="page">
      <header className="header">
        <nav className="nav-links">
          <Link to="/">[home]</Link>
        </nav>
        <h1 className="name2">404</h1>
      </header>

      <section className="content">
        <p>Oh no. Something went wrong.</p>
      </section>
    </div>
  );
};

export default NotFound;
