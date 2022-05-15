import React,{useState} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
function App() {
  const [movies,setMovies] = useState([]);
  const fetchMoviesHandler = async() =>  {
    fetch('https://swapi.dev/api/films').then((response) => {
      return response.json();
    }).then((data) => {
      const transformedMovies = data.results.map((movies) => {
        return {
          id: movies.episode_id,
          title: movies.title,
          releaseDate: movies.release_date,
          openingText: movies.opening_crawl
        }
      })
      setMovies(transformedMovies);
    })
    // axios.get('https://swapi.dev/api/films').then((response) => {
    //   console.log('axios Response' , response);
    // })
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies}  />
      </section>
    </React.Fragment>
  );
}

export default App;
