import { Link, useParams } from 'react-router-dom';
import { collectionType } from '../content/postTypes';
import { findPostBySlug } from '../content/posts';
import usePageTitle from '../hooks/usePageTitle';
import NotFound from './NotFound';

const PostPage = ({ collection }) => {
  const { slug } = useParams();
  const post = findPostBySlug(collection, slug);
  usePageTitle(post?.title ?? '404');

  if (!post) {
    return <NotFound />;
  }

  return (
    <article className="page post">
      <header className="header">
        <nav className="nav-links">
          <Link to="/">[home]</Link>
          <span className="sep">|</span>
          <Link to={collection.path}>{collection.allPostsLabel}</Link>
        </nav>
        <h1 className="name2">{post.title}</h1>
        <p className="post-timestamp">{post.timestamp}</p>
      </header>

      <section className="content">
        <ul className="agenda-list">
          {post.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};

PostPage.propTypes = {
  collection: collectionType.isRequired,
};

export default PostPage;
