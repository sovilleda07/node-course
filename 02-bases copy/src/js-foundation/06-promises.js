/*
// ! Promesas en cadena
const getPokemonById = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((pokemon) => {
      callback(pokemon.name);
    });
};

const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return fetch(url)
    .then((resp) => resp.json())
    .then(() => {
      throw new Error('Pokemon no existe');
    })
    .then((pokemon) => pokemon.name);
};
*/

/* 
// ! Async/Await
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const resp = await fetch(url);
  const pokemon = await resp.json();

  return pokemon.name;
};
*/

/*
// ! Patrón adaptador
const { http } = require('../plugins');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url);

  return pokemon.name;
};
*/

// ! Axios
const { http } = require('../plugins');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url);

  return pokemon.name;
};

module.exports = getPokemonById;
