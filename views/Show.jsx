
import React from 'react';

const Show = ({ pokemon }) => {
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name}</h2>
      <img src={`${pokemon.image}.jpg`} alt={pokemon.name} />
      <a href="/">Back</a>
    </div>
  );
};

export default Show;