const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    
    nombres:{type: String, required: true},
    correo:{type: String, required: true},
    contraseña:{type: String, required: true},
    listaCompras:[{type: mongoose.Schema.Types.ObjectId, ref:'Car', autopopulate:true}]

});

userSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('User', userSchema);