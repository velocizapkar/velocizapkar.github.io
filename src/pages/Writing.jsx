import { Link } from 'react-router-dom';

const Writing = () => {
  return (
    <div className="page">
      <header className="header">
        <nav className="nav-links">
          <Link to="/">[home]</Link>
        </nav>
        <h1 className="name2">Writing</h1>
      </header>

      <section className="content">
        <p>Coming soon.</p>
      </section>
    </div>
  );
};

export default Writing;
