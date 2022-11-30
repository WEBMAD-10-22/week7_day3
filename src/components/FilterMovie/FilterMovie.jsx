const FilterMovie = ({movieState, setFilter}) => {

  const filterMovies = (event) => {
    const { value } = event.target;

    let _movies = [...movieState];

    _movies = _movies.filter((movie) => movie.title.includes(value));

    setFilter(_movies);
  };

  return (
    <form>
      <label htmlFor=''>Title</label>
      <input type='text' name='title' onChange={filterMovies} />
    </form>
  );
};

export default FilterMovie;
