import { useState } from 'react';

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

      <ul className="list-container">

        {movies.map((oneMovie) => <li key={oneMovie.timestamp} 
        className="card">
          <img src= {oneMovie.poster} alt="" />
          <h3>{oneMovie.movie} {oneMovie.year}</h3>
          <p>{oneMovie.full_line}</p>
        </li>
        )}

      </ul>
    </div>
  );
}

export default App;

