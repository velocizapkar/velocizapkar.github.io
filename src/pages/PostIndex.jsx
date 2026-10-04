import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import { collectionType } from '../content/postTypes';
import usePageTitle from '../hooks/usePageTitle';

const PostIndex = ({ collection }) => {
  usePageTitle(collection.title);

  return (
    <div className="page">
      <header className="header">
        <nav className="nav-links">
          <Link to="/">[home]</Link>
        </nav>
        <h1 className="name2">{collection.title}</h1>
      </header>

      <section className="content">
        <PostList collection={collection} />
      </section>
    </div>
  );
};

PostIndex.propTypes = {
  collection: collectionType.isRequired,
};

export default PostIndex;
