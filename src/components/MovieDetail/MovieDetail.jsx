const MovieDetail = ({ movie }) => {
  return (
    <div>
      <p>title: {movie.title}</p>
      <p>director: {movie.director}</p>
      <p>hasOscars: {movie.hasOscars ? '✅' : '📵'}</p>
      <p>IMDBRating: {movie.IMDBRating}</p>
    </div>
  );
};

export default MovieDetail;
