import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";

const MovieQuery = ({ movies }) => {
  const [searchQueryMovie, setSearchQueryMovie] = useSearchParams();
  const queryTitle = searchQueryMovie.get('title'); 
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const moviesFilter = movies.filter((movie) => movie.title === queryTitle);
    setMoviesData(moviesFilter);
  }, [queryTitle]);

  return (
    <MovieList movies={moviesData}/>
  )
}

export default MovieQuery;