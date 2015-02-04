'use strict';
app.controller('ExplorerController',['explorerService'], function ($scope, $explorerService) {
    $scope.explorerNearBy = "London";
    $scope.explorerQuery = "";
    $scope.filterValue = "";


    $scope.places = [];
    $scope.filterPlaces = [];
    $scope.filteredPlacesCount = 0;

    $scope.totalRecordsCount = 0;
    $scope.paseSize = 10;
    $scope.currentPage = 1;

    init();

    function init() {
        createWatche();
        getPlaces();
    }

    function getPlaces() {
        var offset = ($scope.paseSize) * ($scope.currentPage - 1);

        $explorerService.get({ near: $scope.exploreNearby, query: $scope.exploreQuery, limit: $scope.pageSize, offset: offset }, function(placesResult) {
            if (placesResult.response.groups) {
                $scope.places = placesResult.response.groups[0].items;
                $scope.totalRecordsCount = placesResult.response.totalResults;
                filterPlaces('');
            } else {
                $scope.filterPlaces = [];
                $scope.totalRecordsCount = 0;
            }
        });

    };

    function filterPlaces(filterInput) {
        $scope.filterPlaces = $filter("placeNameCategoryFilter")($scope.places, filterInput);
        $scope.filteredPlacesCount = $scope.filterPlaces.length;
    }

    function createWatche() {
        $scope.$watch("filterValue", function(filterInput) {
            filterPlaces(filterInput);
        });
    }

    $scope.doSearch = function (){
        $scope.currentPage = 1;
        getPlaces();
    };

    $scope.pageChanged = function(page) {
        $scope.currentPage = page;
        getPlaces();
    };

    $scope.buildCategoryIcon = function (icon) {

        return icon.prefix + '44' + icon.suffix;
    };

    $scope.buildVenueThumbnail = function (photo) {

        return photo.items[0].prefix + '128x128' + photo.items[0].suffix;
    };


});