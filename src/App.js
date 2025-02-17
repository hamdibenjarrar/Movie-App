import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails'; // Import MovieDetails component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movies/:id" element={<MovieDetails />} /> {/* Add movie detail route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;