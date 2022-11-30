import { useState } from 'react';
import './App.css';
import movies from './movies-data.json';
import LifeState from './pages/LifeStatePage';
import Movies from './pages/MoviePage';

import { Routes, Route } from "react-router-dom"; 
import Page404 from './pages/Page404Page';
import Navbar from './components/Navbar/Navbar';
import MovieParams from './pages/MovieParamsPage';
import MovieQuery from './pages/MovieQueryPage';

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={< Movies movies={movies}/>}/>
        <Route path='/lifeState' element={<LifeState /> }/>
        <Route path='/query' element={<MovieQuery movies={movies} /> }/>
        <Route path='/:idMovie' element={< MovieParams movies={movies}/>}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </div>
  );
}

export default App;
