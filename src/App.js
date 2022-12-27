import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  return (
    <>
      <Navbar Name={'Movie Listing App'}
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