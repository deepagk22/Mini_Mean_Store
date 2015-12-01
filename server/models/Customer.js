var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
 name: String,
 created_at: Date
});
var Customer = mongoose.model('Customer', CustomerSchema);
