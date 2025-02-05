import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className='header'>
        <h1 className='header_title'>Owen Wilson y sus WOW</h1>
        <p className='header_text'>Busca el WOW de Owen Wilson que mas te guste</p>
      </header>

      <div className="search_container">
        <label htmlFor="">Película</label>
        <input type="text" />

        <label htmlFor="">Año</label>
        <input type="text" />
      </div>

      <section className="list-container">
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/91F43kQqbNL._AC_UF894,1000_QL80_.jpg" alt="" />
          <h3>Nombre de la peli y año</h3>
          <p>Wow.</p>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/91F43kQqbNL._AC_UF894,1000_QL80_.jpg" alt="" />
          <h3>Nombre de la peli y año</h3>
          <p>Wow.</p>
        </div>

        <div className="card">
          <img src="https://m.media-amazon.com/images/I/91F43kQqbNL._AC_UF894,1000_QL80_.jpg" alt="" />
          <h3>Nombre de la peli y año</h3>
          <p>Yeah. Wow.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

