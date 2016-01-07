'use strict';

angular.module('samples-module')
    .directive('editorAttribute', [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/editor/editor-attribute.html',
                controller: function ($scope) {
                    $scope.isObject = function(element) {
                        return typeof element === 'object';
                    };
                    $scope.isString = function(element) {
                        return element === 'string';
                    };
                    $scope.isArray = function(element) {
                        return Object.prototype.toString.call( element ) === '[object Array]';
                    };
                }
            }
        }
    ]);
