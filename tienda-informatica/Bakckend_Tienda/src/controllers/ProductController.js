const productSchema = require("../models/product");


module.exports = {
    createProducts: async (req, res) => {
        const product = await productSchema(req.body);
        product
            .save()
            .then((re =>{
                res.redirect('http://localhost:3000/')
            }))
            .catch((error) => res.json({ message: error }))
    },
    getAllProducts: async (req, res) => {
        await productSchema
            .find()
            .exec((error, product) => {
                res.json(product)
            })
    },
    getProducts: async (req, res) => {
        const {id} = req.params;
        await productSchema
            .findById({_id: id})
            .exec((error, product) => {
                res.json(product)
            })
    },
    deleteProducts: async (req, res) => {
        const {id} = req.params;
        await productSchema
            .remove({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    },
    updateProducts: async (req, res) => {
        const { id } = req.params;
        const {nombre,precio,cantidad,imagen,descripcion} = req.body
        await productSchema
            .updateOne({ _id: id },{$set: {nombre,precio,cantidad,imagen,descripcion}})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
            
    },
}