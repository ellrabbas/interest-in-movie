import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import NotFound from './Screens/NotFound';
import MoviesPage from './Screens/MoviesPage';
import SingleMovie from './Screens/SingleMovie';
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
