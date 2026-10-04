export const writingPosts = [
  {
    slug: 'research-agenda',
    title: 'Research Agenda',
    date: '4th October, 2026',
    timestamp: '4th October, 2026',
    bullets: ['Draft coming soon.'],
  },
];

export const researchPosts = [];

export const postCollections = {
  writing: {
    title: 'Writing',
    path: '/writing',
    allPostsLabel: '[all posts]',
    posts: writingPosts,
  },
  research: {
    title: 'Research',
    path: '/research',
    allPostsLabel: '[all research]',
    posts: researchPosts,
  },
};

export const findPostBySlug = (collection, slug) => {
  return collection.posts.find((post) => post.slug === slug);
};
