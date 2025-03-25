import './App.css';
import MoviesList from './components/MoviesList';

/* Variable con el array de películas */
import films from './data/movies.json';

function App() {
  return (
    <div className="App">
      <section id="movies">
        {/* Incluir un componente "MoviesList" en esta caja */}
        <MoviesList movies={films} />
      </section>
    </div>
  );
}

export default App;

