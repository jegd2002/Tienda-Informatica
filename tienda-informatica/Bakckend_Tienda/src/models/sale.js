const mongoose = require ('mongoose')

const saleSchema = mongoose.Schema({

    fecha:{type: String, required: true},
    comprador:[{type: mongoose.Schema.Types.ObjectId, ref:'User', autopopulate:true}]
    

});

saleSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Sale', saleSchema);