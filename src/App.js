import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <>
      <Navbar Name={'Movie App'}
        List={'Movies List'}
        Detail={'Movies Details'}
      />
      <MovieList />
    </>

  )
}

export default App;