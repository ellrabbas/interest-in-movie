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
import MovieList from './Screens/Dashboard/Admin/MovieList';
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import Categories from './Screens/Dashboard/Admin/Categories';
import Users from './Screens/Dashboard/Admin/Users';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
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
      <Route path="/movieList" element={<MovieList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/users" element={<Users />} />
      <Route path="/addmovie" element={<AddMovie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
