'use strict';

angular.module('samples-module')
    .controller('live-examples-controller', [
        '$scope',
        '$http',

        function ($scope, $http) {
            //-----------------
            $scope.mage = '';
            //-----------------

            //-----------------
            $http.get('scripts/live/mage.json')
                .success(function (data) {
                    $scope.mage = data;
                });
            //-----------------
        }
    ]);
