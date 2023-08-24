const React = require('react');

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={`${pokemon.image}.jpg`} alt={pokemon.name} />
        <a href="/">Back</a>
      </div>
    )
  }
}

module.exports = Show;