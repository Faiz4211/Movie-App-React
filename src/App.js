import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Alert from './components/Alert';

const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#181a1c';
      showAlert("Dark Mode has been enable", "success");
      document.title = 'MovieApp - DarkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode has been enable", "success");
      document.title = 'MovieApp - LightMode';
    }
  }

  return (
    <>
      <Navbar
        List={'Movie List'}
        Detail={'Movies Details'}
        mode={mode} toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<MovieList mode={mode} />} />
        <Route path='/MovieDetail' element={<MovieDetail />} />
      </Routes>
    </>
  )
}

export default App;