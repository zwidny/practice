angular.module('stockMarketApp')
    .directive('stockWidget', [function () {
        return {
            templateUrl: 'views/stock.html',
            restrict: 'AE'
        };
    }]);