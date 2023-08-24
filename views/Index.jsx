const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render () {
    const { pokemon } = this.props;
    return(
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <ul>
          {pokemon.map((pokemon, index) => (
            <li key={index}>
              <a href={`/pokemon/${index}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
            </li>
          ))}
        </ul>
    </div>
    )
  }
}

module.exports = Index;




