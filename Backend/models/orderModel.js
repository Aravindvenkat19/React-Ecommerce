const moongose = require('mongoose')

const orderSchema = new moongose.Schema({
   cartItems : Array,
   amount : String,
   status : String,
   createdAt : Date
});

const orderModel = moongose.model('Order',orderSchema);

module.exports = orderModel



