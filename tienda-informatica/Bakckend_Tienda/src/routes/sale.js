const express = require("express");
const router = express.Router();
const { createSale, getAllSales, getSales } = require("../controllers/saleController");

//Crear
router.post('/sale', createSale);

//Consultar
router.get('/sale', getAllSales);

//consultar por id
router.get('/sale/:id', getSales);

module.exports = router;