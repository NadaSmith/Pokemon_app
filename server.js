const express = require('express');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!')
})

//INDEX ROUTE
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon: pokemon });
})

// ROUTE
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const pokemon = pokemonData[id];

    // Render Show.jsx with individual Pokemon data
    res.render('Show', { pokemon });
});











app.listen(3000, () => {
    console.log('listening');
});