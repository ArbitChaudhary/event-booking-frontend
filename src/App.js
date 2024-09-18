import './App.css'
import React, { } from 'react';
import { useLocation } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';

import MovieDetails from './pages/movie/MovieDetails';
import Sports from './pages/sports/Sports';
import SportsDetail from './pages/sports/SportsDetail';

import Navbar from './components/Navbar/Navbar'
import Signup from './pages/pages/Signup';
import Signin from './pages/pages/Signin';
// import ContactUsSpeaker from './pages/pages/contactUsSpeaker';
import Footer from './components/footer/Footer';

import EventDetails from './components/Events/EventsDetails';
import Event from './components/Events/Events'
import Home from './components/home/Home';

import Movie from './pages/movie/Movies';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Searched from './components/Searched/Searched';
import Page_404 from './pages/Page-404/Page_404';

function App() {
  const location = useLocation()
  return (
  <div className='App'>
    {/* <Header /> */}
  {/* <Navbar /> */}
  <AnimatePresence>
  <Routes location={location} key={location.pathname}>
      <Route path="/"  element={<Home /> } />

      <Route path="/movies" element={<Movie /> } />
      <Route path='/moviedetails/:id' element={<MovieDetails /> } />
      <Route path='/sports' element={<Sports />} />
      <Route path="/sportsDetail/:id" element={<SportsDetail />} />
      
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
     
      <Route path="/eventdetails/:id" element={<EventDetails /> }/>
      <Route path='/event' element={<Event/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path='/about' element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/searched" element={<Searched /> } />
      <Route path="/404" element={<Page_404 />} />
      
    </Routes>
    </AnimatePresence>
    {/* <Footer /> */}
    </div>
    
  );
}

export default App;
