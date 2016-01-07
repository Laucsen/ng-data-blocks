'use strict';

angular.module('samples-module')
    .controller('editor-controller', [
        '$scope',

        'ng-data-blocks-info',

        'editor-meta',
        'editor-styles',

        function ($scope, Info, Meta, Styles) {

            $scope.availableTypes = Info.getAvailableComponentsTypes();
            $scope.widgets = Info.getAvailableComponents();

            $scope.rootElement = [];
            $scope.activeElement = undefined;

            $scope.edDragoverCallback = function (type) {
                var lcondition = $scope.rootElement.length === 0;
                var scondition = Meta.isElement(type) !== undefined;
                return lcondition && scondition;
            };
            $scope.edDropCallback = function (type) {
                var sample = Meta.get(type);
                return sample || false;
            };

            $scope.isIn = function (melements, selement) {
                return melements.indexOf(selement) >= 0;
            };

            $scope.rootClicked = function () {
                $scope.rootElement[0].active = !$scope.rootElement[0].active;
                if ($scope.rootElement[0].active) {
                    $scope.activeElement = $scope.rootElement[0];
                    console.log($scope.activeElement);
                } else {
                    $scope.activeElement = undefined;
                }
            };
            $scope.removeItem = function () {
                $scope.rootElement = [];
                $scope.activeElement = undefined;
            };

            $scope.runSpecial = function (field) {
                if (field === 'style') {
                    Styles.show($scope.activeElement.data);
                }
            };
        }
    ]);
