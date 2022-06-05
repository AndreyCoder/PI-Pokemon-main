const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.get('/', async (req, res) => {
  const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon');
  const names = { ...respuesta.data.results }
  res.send(names);

});





module.exports = router;