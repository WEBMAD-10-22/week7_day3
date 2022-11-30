import { useState } from "react";

const CreateMovie = ({ setFilter, movieState, setMovieState }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    _id: Math.random(),
  });

  const updateNewMovie = (event) => {
    const { name, value } = event.target;

    setNewMovie({ ...newMovie, [name]: value });

    // const name = event.target.name;
    // const value = event.target.value;
    // const _newMovie = { ...newMovie };
    // _newMovie[name] = value;
    // setNewMovie(_newMovie);
  };

  const createNewMovie = (event) => {
    event.preventDefault();
    console.log(newMovie);
    const _movies = [...movieState];
    _movies.push(newMovie);
    setMovieState(_movies);
    setNewMovie({
      title: '',
      director: '',
      _id: Math.random(),
    });
    setFilter(_movies)
  };

  return(
    <>
    <form onSubmit={createNewMovie}>
        <label htmlFor=''>Title: </label>
        <input
          type='text'
          name='title'
          onChange={updateNewMovie}
          value={newMovie.title}
        />
        <label htmlFor=''>director</label>
        <input
          type='text'
          name='director'
          id='inpt'
          onChange={updateNewMovie}
          value={newMovie.director}
        />
        <button type='submit'>Add Movie</button>
      </form>
      <p>New Title: {newMovie.title}</p>
      <p>New Director: {newMovie.director}</p>
    </>
  )
}

export default CreateMovie;