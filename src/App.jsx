import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home';
import Footer from './components/Footer'
import MoviesPage from './components/MoviesPage'
import PopularPage from './components/PopularPage'
import TrailersPage from './components/TrailersPage'
import MovieDetails from './components/MovieDetails';

function App() {
  return(

    <Router>
            <div className="App">
              <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/popular" element={<PopularPage />} />
                    <Route path="/trailers" element={<TrailersPage />} />
                    <Route path="/details/:title" element={<MovieDetails />} />
                </Routes>
                <Footer />
            </div>
        </Router>
  )
  
}

export default App
