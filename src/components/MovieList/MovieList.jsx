import MovieDetail from "../MovieDetail/MovieDetail";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieDetail key={movie._id} movie={movie} />
        );
      })}
    </div>
  );
};

export default MovieList;
