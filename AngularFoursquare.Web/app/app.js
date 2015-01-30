var app = angular.module('App', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider.when("/explore", {
        controller: "ExplorerController",
        templateUrl: "/app/views/placesresults.html"
    });
    $routeProvider.otherwise({ rediretTo: "/explore" });
});