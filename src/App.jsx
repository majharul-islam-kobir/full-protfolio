
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';

import Home from './pages/Home';
import Protfolio from './pages/Protfolio';
import Contact from './pages/Contact';
import Message from './pages/Message';
import About from './pages/About';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Protfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
    </Route>
    <Route path="*" element={<Home />} />
  </Routes>
  
  );
};

export default App;

