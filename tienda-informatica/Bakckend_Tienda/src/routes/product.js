const express = require("express");
const router = express.Router();
const { createProducts, getAllProducts, deleteProducts, updateProducts, getProducts} = require("../controllers/ProductController")

//Crear
router.post('/product', createProducts);

//Consultar 
router.get('/product', getAllProducts);

//Consultar por id
router.get('/product/:id', getProducts);

//Eliminar
router.delete('/product/:id', deleteProducts);

//Actualizar
router.put('/product/:id',updateProducts);

router.get('/product/_id', getProducts);


module.exports = router;