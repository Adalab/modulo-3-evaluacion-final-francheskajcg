import { useEffect, useState } from 'react';


import '../styles/App.scss';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import Header from './Header'





function App() {

  //VARIABLES DE ESTADO

  const [movies, setMovies] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterYear, setFilterYear] = useState('');

  //cambiar direccion
  useEffect(() => {
    fetch(`https://owen-wilson-wow-api.onrender.com/wows/random?results=50&movie=${filterName}`)
      .then(response => response.json())
      .then(moviesJson => {
        setMovies(moviesJson);
      });

  }, [filterName]);

  //SECCIÓN DE EVENTOS

  const handleInputFilterName = (ev) => {
    ev.preventDefault();
    setFilterName(ev.target.value);
  }

  const handleInputFilterYear = (ev) => {
    setFilterYear(ev.target.value);
  };


  console.log(movies);

  const filteredMovies = movies.filter(
    movie =>

      (filterYear === '' || movie.year.toString() === filterYear)
  );

  const years = [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);

  return (
    <div>
      <Header></Header>

      <main>


        <Routes>
          <Route index element={<LandingPage movies={filteredMovies}
            handleInputFilterName={handleInputFilterName}
            handleInputFilterYear={handleInputFilterYear}
            years={years}
            filterName={filterName}
            filterYear={filterYear} />}></Route>
          <Route path="detail/:name" element={<DetailPage />}></Route>
        </Routes>



      </main>
    </div >
  );
}

export default App;

