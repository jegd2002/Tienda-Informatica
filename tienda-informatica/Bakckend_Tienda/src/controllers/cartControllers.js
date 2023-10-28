const cartSchema = require('../models/cart');

module.exports ={

    addProductCart: async (req, res) => {
        const {id} = req.params
        const idExiste = await cartSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error + 'el carrito ya esta creado'}));
        if(!idExiste){
            const cart =await cartSchema(req.body);
            cart
                .save()
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }))
        }
    },

    getAllCart: async (req, res) => {
        await cartSchema
            .find()
            .exec((error, cart) => {
                res.json(cart)
            })
    },
    getCart: async (req, res) => {
        const {id} = req.params;
        await cartSchema
            .findById({_id: id})
            .exec((error, cart) => {
                res.json(cart)
            })
    },
    deleteCart: async (req, res) => {
        const {id} = req.params;
        await cartSchema
            .remove({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    },
    updateCart: async (req, res) =>{
        const {id} = req.params;
        const { producto } = req.body;
        await cartSchema
       .updateOne({ _id: id }, { $set: { producto} })
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
    }
}















