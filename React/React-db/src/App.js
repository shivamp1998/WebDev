import React,{useState} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import MovieList from './components/MoviesList';
function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState("");
  const fetchMoviesHandler = () =>  {
    setIsLoading(true);
    fetch('https://swapi.dev/api/films').then((response) => {
      if(!response.ok) {
        throw new Error('Something Went Wrong');
      }
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
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      setError(err.message);
    })
    setIsLoading(false);
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
       {!isLoading && movies &&  movies.length > 0 &&   <MoviesList movies={movies}  />}
       {!isLoading && movies &&  movies.length === 0 && <p> No Movies Found! </p>}
       {isLoading && <p> Loading... </p>}
       {!isLoading && error && {error}}
      </section>
    </React.Fragment>
  );
}

export default App;
