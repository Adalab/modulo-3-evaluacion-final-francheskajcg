import { useEffect, useState } from 'react';
import MovieSceneList from './movies/MovieSceneList';

import '../styles/App.scss';





function App() {

  //VARIABLES DE ESTADO

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then(response => response.json())
      .then(moviesJson => {
        setMovies(moviesJson);
      });

  }, []);


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

      {movies.length === 0
        ?
        <p>No tenemos esa película 🥲 </p>
        :
        <MovieSceneList
          movies={movies}>
        </MovieSceneList>
      }

    </div>
  );
}

export default App;

