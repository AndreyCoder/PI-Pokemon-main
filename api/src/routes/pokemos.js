const { Router } = require('express');
const { Pokemon } = require('../db')
// const axios = require('axios');
const router = Router();

// router.get('/', async (req, res) => {
//   const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon');
//   const names = { ...respuesta.data.results }
//   res.send(names);
// });

router.get('/', (req, res, next) => {
  return Pokemon.findAll()
    .then((Pokemon) => {
      res.send(Pokemon)
    })
    .catch((error) => {
      next(error)
    })
})

router.post('/', async (req, res, next) => {

  try {
    const {
      name,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      imagen,
      creadaEnBb
    } = req.body;
    const newPokemon = await Pokemon.create({
      name,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      imagen,
      creadaEnBb
    })
    res.status(201).send(newPokemon)
  }
  catch (error) {
    next(error)
  }
})

router.put('/', (req, res, next) => {
  res.send('soy put / pokemon')
})


router.delete('/', (req, res, next) => {
  res.send('soy delete / pokemon')
})


module.exports = router;