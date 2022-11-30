import { useState } from "react";
import CreateMovie from "../components/CreateMovie/CreateMovie";
import FilterMovie from "../components/FilterMovie/FilterMovie";
import MovieList from "../components/MovieList/MovieList";
import LifeState from "./LifeStatePage";

const Movies = ({ movies }) => {
  const [movieState, setMovieState] = useState(movies);
  const [filter, setFilter] = useState(movies);

  return (
    <>

    <div className='App'>
      <CreateMovie
        setFilter={setFilter}
        movieState={movieState}
        setMovieState={setMovieState}
      />
      <FilterMovie movieState={movieState} setFilter={setFilter} />
      <MovieList movies={filter} />
    </div>
    </>
  );
}

export default Movies;