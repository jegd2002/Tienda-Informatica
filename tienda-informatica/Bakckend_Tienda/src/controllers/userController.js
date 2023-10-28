const userSchema = require("../models/user");


module.exports = {
    createUser: async (req, res) => {
        const user = await userSchema(req.body);
        user
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    },
    getAllUsers: async (req, res) => {
        await userSchema
            .find()
            .exec((error, user) => {
                res.json(user)
            })
    },
    getUsers: async (req, res) => {
        const {id} = req.params
        await userSchema
            .find({_id: id})
            .exec((error, user) => {
                res.json(user)
            })
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        await userSchema
            .remove({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        const {nombres,correo,contraseña} = req.body
        await userSchema
            .updateOne({ _id: id },{$set: {nombres,correo,contraseña}})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }))
    },
}