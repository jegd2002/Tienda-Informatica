const saleSchema = require('../models/sale');

module.exports = {
    createSale: async (req, res) => {
        const sale = await saleSchema(req.body);
        sale
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    },
    getAllSales: async (req, res) => {
        await saleSchema
            .find()
            .exec((error, user) => {
                res.json(user)
            })
    },
    getSales: async (req, res) => {
        const {id} = req.params
        await saleSchema
            .find({_id: id})
            .exec((error, user) => {
                res.json(user)
            })
    },

}