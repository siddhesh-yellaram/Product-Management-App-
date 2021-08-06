app.controller("productListController", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {

    //display json data
    $http.get('products.json').success(function (data) {
        $rootScope.products = data;
    }).error(function (data, status) {
        console.error('Fail to load data', status, data);
        $rootScope.products = {};
    })

    //show and hide images
    $scope.btnName = "Show Image";
    $scope.isVisible = false;
    $scope.showHide = function () {
        if ($scope.isVisible == false) {
            $scope.isVisible = true;
            $scope.btnName = "Hide Image";
        } else {
            $scope.isVisible = false;
            $scope.btnName = "Show Image";
        }
    }

    $rootScope.productsModel = {};

    //load product details
    $rootScope.loadDetails = function (products) {
        $rootScope.productsModel = products;
        console.log($rootScope.productsModel)
    }

}]).directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat = "star in stars">' +
            '<div>' + '<div ng-class="star">' + '\u2605' + '</div>' + '</div>'
            + '</li>'
            + '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.ratingValue - 1,
                    halfFilled: i == Math.ceil(scope.ratingValue) && (scope.ratingValue % 1) > (0 % 1),
                });
            }
        }
    }
});