import { Link } from 'react-router-dom';
import { collectionType } from '../content/postTypes';

const PostList = ({ collection }) => {
  const posts = collection.posts;

  if (posts.length === 0) {
    return <p>Coming soon.</p>;
  }

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <p>
            {collection.path !== '/writing' && <span>{post.date} | </span>}
            <Link to={`${collection.path}/${post.slug}`}>{post.title}</Link>
          </p>
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  collection: collectionType.isRequired,
};

export default PostList;
