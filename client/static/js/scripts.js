        var CO_app = angular.module('CO_app', ['ngRoute']);

        CO_app.factory('COFactory', function ($http)
        {

            var factory = {};
            var customers=[];
            factory.getCustomers = function (callback)
            {
                $http.get('/customer').success(function(output) {
                customers=output;
                callback(output);
                }) 
            }

            factory.getOrderCustomers = function (callback)
            {
                 $http.get('/order').success(function(output) {
              
                callback(output);
                }) 
            }

            factory.addCustomers = function (data)
            {
                
                for(customer in customers)
                {
                    if(customers[customer].name==data.name)
                    {
                       return;
                    }
                }
                $http.post('/customer/create',data).success(function(output) {
              
                
                })            
            }
            
            factory.addOrder = function (data)
            {

                $http.post('/order/create',data).success(function(output) {
                    
                    
                })         
            }


              factory.removeCustomers = function (data)
            {

                $http.post('/customer/destroy',data).success(function(output) {
              
                    
                })         
            }

              factory.addOrder = function (data)
            {

                $http.post('/order/create',data).success(function(output) {
                    
                   
                })         
            }

            factory.getProducts = function (callback)
            {
                 $http.get('/product').success(function(output) {
              
                callback(output);
                }) 
            }

            factory.addProduct = function (data)
            {

                $http.post('/product/create',data).success(function(output) {
                    
                   
                })         
            }
            

            return factory;
        });
    CO_app.config(function ($routeProvider) 
    {
      $routeProvider
        .when('/Customer',
        {
            templateUrl: 'partial/customer.html'
        })
        .when('/Products',
        {
            templateUrl: 'partial/products.html'
        })
        .when('/Orders',
        {
            templateUrl: 'partial/order.html'
        })
        .when('/',
        {
            templateUrl: 'partial/dashboard.html'
        })
        .otherwise(
        {
          redirectTo: '/'
        })
    });
    CO_app.controller('customersController', function ($scope, COFactory)
    {
        $scope.mynum=50;
        $scope.customers=[];

        COFactory.getCustomers(function (data)
        {

            $scope.customers = data;
        }); 
        $scope.addCustomers = function()
        {

            COFactory.addCustomers($scope.newCustomer);
            COFactory.getCustomers(function (data)
            {

                $scope.customers = data;
            });
            $scope.newCustomer = {};
        }
         $scope.removeCustomers = function(customer)
        {

            COFactory.removeCustomers(customer);
            COFactory.getCustomers(function (data)
            {
                $scope.customers = data;
            });
            
        }
    });
    CO_app.controller('productController', function ($scope, COFactory) 
    {
        $scope.products=[];
        $scope.range = function(min, max, step){
           step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) input.push(i);
            return input;
        }
        COFactory.getProducts(function (data)
        {
            $scope.products = data;
        }); 
        $scope.addProduct =function()
        {
            COFactory.addProduct($scope.newProduct);
            COFactory.getProducts(function (data)
            {
                $scope.products = data;
            }); 
            $scope.newProduct={};
        } 


      });
    CO_app.controller('ordersController', function ($scope, COFactory) 
    {
         $scope.range = function(min, max, step){
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) input.push(i);
            return input;
          }

        $scope.orderCusts=[];
        $scope.customers=[];
        $scope.products=[];
        COFactory.getProducts(function (data)
        {
            $scope.products = data;
        }); 
        COFactory.getCustomers(function (data)
        {
            $scope.customers = data;
        }); 
        COFactory.getOrderCustomers(function (data)
        {
            $scope.orderCusts = data;
        });
        $scope.addOrder =function()
        {
            COFactory.addOrder($scope.newOrder);
            $scope.newOrder={};
            
            COFactory.getOrderCustomers(function (data)
            {
                $scope.orderCusts = data;
            }); 
            
        } 
    });