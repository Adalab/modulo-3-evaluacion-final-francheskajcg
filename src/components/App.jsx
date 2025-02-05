import { useState } from 'react';
import MovieSceneList from './movies/MovieSceneList';

import '../styles/App.scss';

import moviesJson from '../data/movies.json';



function App() {

  //VARIABLES DE ESTADO

  const [movies, setMovies] = useState(moviesJson);


  return (
    <div>
      <header className='header'>
        <h1 className='header_title'>Owen Wilson y sus WOW</h1>
        <p className='header_text'>Busca el WOW de Owen Wilson que mas te guste</p>
      </header>

      <form className="search_container">
        <label htmlFor="movie">Película:</label>
        <input type="search" placeholder="Nombre de la película" />

        <label htmlFor="">Año:</label>
        <input type="search" placeholder="Año de la película" />
      </form>

      <MovieSceneList
        movies={movies}>
      </MovieSceneList>

    </div>
  );
}

export default App;

