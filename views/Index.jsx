import React from 'react';

const Index = ({ pokemonData }) => {
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <ul>
        {pokemon.map((pokemon, index) => (
          <li key={index}>
            <a href={`/pokemon/${index}`}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;