var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
 product_id: {type: Schema.ObjectId, ref: 'Product'},
 qty: Number,
 customer_id:{type: Schema.ObjectId, ref: 'Customer'}
});
var Order = mongoose.model('Order', OrderSchema);
