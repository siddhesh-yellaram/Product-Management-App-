var app = angular.module("productApp", ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'welcome.html',
    }).when('/productmngmt', {
        templateUrl: 'productmngmt.html',
        controller: 'productmngmtController'
    }).when("/home", {
        templateUrl: 'home.html',
    }).when("/productlist", {
        templateUrl: 'productList.html',
        controller: 'productListController'
    }).when("/productDetails", {
        templateUrl: 'productDetails.html',
    });
}]);