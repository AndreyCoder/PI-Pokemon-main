const axios = require("axios");
const { Router } = require("express");
const { Type } = require("../db.js");

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    // 👇 Trae todos los tipos
    const api = await axios.get("https://pokeapi.co/api/v2/type");
    // 👇 trae la respuesta en data
    const types = await api.data
    // 👇 Entra a la propiedad results, a cada elemento..
    for (type of types.results) {
      // 👇 Entra a la propiedad name y busca si ya existe
      const find = await Type.findOne({ where: { name: type.name } });
      // 👇 Si no lo encuentra..
      if (!find) {
        // 👇 Lo agrega a la base de datos
        await Type.create({ name: type.name });
      } else {
        // 👇 Sino devuelve todos los tipos
        return res.json(await Type.findAll())
      }
    }
    // 👇 Finalmente devuelvo todos los tipos de la Db.
    res.json(await Type.findAll());
  } catch (error) {
    next(error);
  }
});


module.exports = router;
