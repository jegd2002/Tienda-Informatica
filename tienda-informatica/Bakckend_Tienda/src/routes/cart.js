const express = require("express");
const router = express.Router();
const { addProductCart, getAllCart, deleteCart, getCart } = require("../controllers/cartControllers")

router.post('/cart/:id', addProductCart );
router.get('/cart', getAllCart);
router.get('/cart/:id', getCart);
router.delete('/cart', deleteCart);

module.exports = router;