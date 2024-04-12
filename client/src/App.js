import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import NotFound from './Screens/NotFound';
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
