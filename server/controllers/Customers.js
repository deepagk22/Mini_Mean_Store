var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() 
{
	return{
		showCustomer:function(req,res)
		{
			Customer.find({}).sort({_id:'desc'}).exec(function(err, results){
				if(err)
				{}
				else
				{
					res.json(results);
				}
			});
		},
		createCustomer:function(req, res)
		{
			console.log(req.body);
			var customer = new Customer({name: req.body.name, created_at:new Date().now});
			customer.save(function(err)
			{
				if(err){
					console.log("fhksdhfkdjs");
				}
				else
				{
					res.redirect('/customer');
				}

			});

		},
		destroyCustomer: function(req,res)
		{
			Customer.remove({_id: req.body._id}, function (err){
				res.redirect('/customer');

			});
		}

	}
})();