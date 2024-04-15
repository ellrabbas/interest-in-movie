import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import NotFound from './Screens/NotFound';
import MoviesPage from './Screens/MoviesPage';
import SingleMovie from './Screens/SingleMovie';
import Watch from './Screens/Watch';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Account from './Screens/Dashboard/Account';
import Password from './Screens/Dashboard/Password';
import FavMovies from './Screens/Dashboard/FavMovies';
import "tailwindcss/tailwind.css";
import Aos from 'aos';

const App = () => {
  Aos.init();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<SingleMovie />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Account />} />
      <Route path="/password" element={<Password />} />
      <Route path="/favorites" element={<FavMovies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
