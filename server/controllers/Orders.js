var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
module.exports = (function() 
{
	return{
		show:function(req,res)
		{
			Order.find({}).sort({_id:'desc'}).populate('customer_id').populate('product_id')
				.exec(function(err, results){
				if(err)
				{}
				else
				{
					res.json(results);
				}
			});
		},
		create:function(req, res)
		{
			
			console.log(req.body);
			Product.findOne({_id:req.body.product}, function(err,prod){
				if (prod.qty<req.body.qty)
				{
					console.log("Product not avaliable for the order");
					return;
				}
				prod.qty-=req.body.qty;
				prod.save(function(err){
					if(err)
						console.log("Product not changed");
				})
			});
			var order = new Order({product_id:req.body.product, qty:req.body.qty, customer_id:req.body.name});
			order.save(function(err)
			{
				if(err){
					console.log("Order not added");
				}
				else
				{


					res.redirect('/order');
				}

			});

		},
		destroy: function(req,res)
		{
			Order.remove({_id: req.body._id}, function (err){
			res.redirect('/order');

		});
}

	}
})();