
var mongoose = require('mongoose');

var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var customers = require('../controllers/Customers.js');
var orders = require('../controllers/Orders.js');
var product = require('../controllers/Product.js');
module.exports = function(app) {

app.get('/order', function(req,res){
	orders.show(req,res);
});
app.get('/customer', function(req, res){
	customers.showCustomer(req,res);
});

app.post('/customer/create', function(req,res){
	customers.createCustomer(req,res);
});
app.post('/order/create', function(req,res){
	orders.create(req,res);
});

app.post('/product/create', function(req,res){
	product.createProduct(req,res);
});

app.get('/product', function(req,res){
	product.showProduct(req,res);
});

app.post('/customer/destroy', function(req,res){
	customers.destroyCustomer(req,res);
});

}