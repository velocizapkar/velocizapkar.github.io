import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Writing from './pages/Writing';
import Research from './pages/Research';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/research" element={<Research />} />
    </Routes>
  );
};

export default App;
