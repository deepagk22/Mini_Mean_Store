var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function() 
{
	return{
		showProduct:function(req,res)
		{
			Product.find({}).sort({_id:'desc'}).exec(function(err, results){
				if(err)
				{}
				else
				{
					res.json(results);
				}
			});
		},
		createProduct:function(req, res)
		{
			console.log(req.body);
			var product = new Product({name: req.body.name, 
				image: req.body.image, 
				descriptions: req.body.description, 
				qty:req.body.qty});
			product.save(function(err)
			{
				if(err){
					console.log("fhksdhfkdjs");
				}
				else
				{
					res.redirect('/product');
				}

			});

		}
	}
})();