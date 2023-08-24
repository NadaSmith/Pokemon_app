const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textAlign: 'center',
  border: "dotted",
};



class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

        <img style={myStyle} src={`${pokemon.img}`}  /> 
        <p>
          <a href="/pokemon">Back</a>
        </p>
        
      </div>
    )
  }
}

module.exports = Show;