import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  useEffect(() => {
    <MovieList />
  }, [])

  return (
    <>
      <Navbar
        Name={'MovieApp'}
        List={'Movie List'}
        Detail={'Movies Details'}
      />
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/MovieDetail' element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App;