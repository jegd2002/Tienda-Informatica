const mongoose = require ('mongoose')

const carSchema = mongoose.Schema({
    
    producto:[{type: mongoose.Schema.Types.ObjectId, ref:'Product', autopopulate:true}]

});
carSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Car', carSchema);

