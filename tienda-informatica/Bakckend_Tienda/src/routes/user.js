const express = require("express");
const router = express.Router();
const { createUser, getAllUsers ,deleteUser, updateUser, getUsers } = require("../controllers/userController")

//Crear
router.post('/user', createUser);

//Consultar

router.get('/user', getAllUsers);

//Consultar por id

router.get('/user/:id', getUsers);

//Eliminar

router.delete('/user/:id', deleteUser);

//Modificar

router.put('/user/:id',updateUser);


module.exports = router;