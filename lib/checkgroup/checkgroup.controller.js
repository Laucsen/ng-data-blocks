'use strict';

angular.module('ng-data-blocks')
    .controller('checkgroup-controller', [
        '$scope',

        function ($scope) {

            // Check for min value
            if ($scope.cgData.data.min !== undefined) {
                if ($scope.cgData.data.value < $scope.cgData.data.min) {
                    $scope.cgData.data.value = $scope.cgData.data.min;
                }
            }

            /**
             * Create a dynamic array to create custom ng-repeat component.
             * @param value Array Size.
             * @returns {Array}
             */
            $scope.dynamicArraySize = function(value) {
                return new Array(value);
            };

            $scope.select = function(index) {
                var nval = index + 1;

                if ($scope.cgData.data.value === nval) {
                    nval--;
                }

                if ($scope.cgData.data.min !== undefined) {
                    if (nval < $scope.cgData.data.min) {
                        // TODO: On future, user will know when this error happen.
                        return;
                    }
                }

                $scope.cgData.data.value = nval;
            };

        }
    ]);
