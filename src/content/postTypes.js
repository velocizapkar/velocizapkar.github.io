import PropTypes from 'prop-types';

export const postType = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const collectionType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  allPostsLabel: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(postType).isRequired,
});
