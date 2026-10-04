import { useLayoutEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostIndex from './pages/PostIndex';
import PostPage from './components/PostPage';
import NotFound from './components/NotFound';
import { postCollections } from './content/posts';

const App = () => {
  const [lightsOut, setLightsOut] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.localStorage.getItem('lights') === 'out';
  });

  // Restore the saved setting on every route before React paints the page.
  useLayoutEffect(() => {
    document.body.classList.toggle('lights-out', lightsOut);
    window.localStorage.setItem('lights', lightsOut ? 'out' : 'on');
  }, [lightsOut]);

  return (
    <Routes>
      <Route path="/" element={<Home lightsOut={lightsOut} onToggleLights={() => setLightsOut((isOut) => !isOut)} />} />
      <Route path="/writing" element={<PostIndex collection={postCollections.writing} />} />
      <Route path="/writing/:slug" element={<PostPage collection={postCollections.writing} />} />
      <Route path="/research" element={<PostIndex collection={postCollections.research} />} />
      <Route path="/research/:slug" element={<PostPage collection={postCollections.research} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
