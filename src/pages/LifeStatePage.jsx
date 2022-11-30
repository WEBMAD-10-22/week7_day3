import { useEffect, useState } from 'react';
import axiosPokeAPI from '../services/pokeapi.service';

const LifeState = ({ movies }) => {
  // useEffect(() => {
  //   console.log('Solo la primera vez');
  // }, []);

  // useEffect(() => {
  //   console.log('Movies: primera vez');
  //   console.log('Modifiquen las movies');
  // }, [movies]);

  // useEffect(() => {
  //   console.log('Desmontar: primera vez');

  //   return () => {
  //     console.log('Me desmonté. Me Muero :(');
  //   };
  // }, []);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const idInterval = setInterval(() => {
      console.log('counter');
      setCounter((preCounter) => {
        return preCounter + 1;
      });
    }, 1000);

    return () => {
      console.log('MATAR INTERVAL.');
      clearInterval(idInterval);
    };
  }, []);

  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  // Se ejecutar siempre que exista un cambio de estado o de props
  // --  AQUÍ  --

  useEffect(() => {
    axiosPokeAPI
      .getPokemons()
      .then((pokemons) => {
        console.log('llamar a pokemon');
        setPokemons(pokemons.results);
      })
      .catch((err) => {
        console.error(err);
        setError('Error');
      });
  }, []);

  const [loading, setLoading] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setLoading(!loading);
        }}
      >
        Change Loading
      </button>
      {!loading && (
        <>
          <h1>{counter}</h1>
          {pokemons.map((pokemon) => {
            return <p key={pokemon.name}>{pokemon.name}</p>;
          })}
          {error && <p>{error}</p>}
        </>
      )}
    </>
  );
};

export default LifeState;
