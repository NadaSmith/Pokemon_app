const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js');
const React = require('react');
const ReactDOMServer = require('react-dom/server');


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!');
});

//INDEX ROUTE
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon: pokemon });
})

// SHOW ROUTE
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const pokemonID = pokemon[id];

    // Render Show.jsx with individual Pokemon data
    res.render('Show', { pokemon: pokemonID });
});











app.listen(3000, () => {
    console.log('listening');
});