import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <img src="/santorini.jpeg" alt="Aakanksh Zarapkar" className="profile-image" />
      <header className="header">
        <h1 className="name">Aakanksh Zarapkar</h1>
        <nav className="nav-links">
          <a href="mailto:aakanksh.z98@gmail.com">email</a>
          <span className="sep">|</span>
          <a href="https://x.com/velocizapkar">twitter</a>
          <span className="sep">|</span>
          <Link to="/writing">writing</Link>
          <span className="sep">|</span>
          <Link to="/research">research</Link>
        </nav>
      </header>

      <section className="content">
        <p>
          I&apos;m a software engineer at <a href="https://microsoft.ai/">Microsoft AI</a>, where I work on <a href="https://www.bing.com/">Bing</a> Metrics.
          As an independent researcher, I&apos;m interested in social intelligence and model efficiency.
        </p>
      </section>
    </div>
  );
};

export default Home;
