'use strict';

angular.module('ng-data-blocks')
    .controller('ng-data-blocks-controller', [
        '$scope',

        'ng-data-blocks-info',

        function ($scope, Info) {

            /**
             * Available Block Types
             */
            $scope.availableTypes = Info.getAvailableComponentsTypes();

            /**
             * Check for available types.
             */
            $scope.isAvailable = function (type) {
                return $scope.availableTypes.indexOf(type) >= 0;
            };

            /**
             * Check specific type
             */
            $scope.check = function (data, type) {
                return data.type === type;
            };

        }
    ]);
