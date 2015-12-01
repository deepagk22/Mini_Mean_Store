var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
 name: String,
 image:String,
 description:String,
 qty: Number
});
var Product = mongoose.model('Product', ProductSchema);
