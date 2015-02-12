var app = angular.module('App', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.constant('CONSTANT', {
    'PLACE_NAME_CATEGORY_FILTER': 'placeNameCategoryFilter',
    'FILTER_VALUE': 'filterValue'
});
app.config(function($routeProvider) {
    $routeProvider.when("/explore", {
        controller: "ExplorerController",
        templateUrl: "/app/views/placesresults.html"
    });
    $routeProvider.otherwise({ rediretTo: "/explore" });
});