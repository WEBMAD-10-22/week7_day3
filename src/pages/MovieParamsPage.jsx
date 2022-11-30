import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieParams = ({ movies }) => {
  const [movie, setMovie] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { idMovie } = useParams();

  useEffect(() => {
    const findMovie = movies.find((movie) => movie._id === idMovie);
    setMovie(findMovie);
    setLoading(false);
  }, [idMovie]);

  return (
    <div>
      <p>{movie && movie.title }</p>
      {/* <p>{movie?.title}</p> */}
      {/* {loading ? <p>Loading...</p> : <p>{movie.title}</p>} */}
      {/* {movie ? (
        <p>{movie.title}</p>
      ) : (
        <p>
          En algun momento aparecerá un título en este lugar. Te has quedado
          bien al hacerme escribir todo esto...
        </p>
      )} */}
    </div>
  );
};

export default MovieParams;
