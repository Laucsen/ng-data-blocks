'use strict';

angular.module('samples-module')
    .controller('editor-controller', [
        '$scope',

        'ng-data-blocks-info',

        'editor-sampler',

        function ($scope, Info, Sampler) {

            $scope.availableTypes = Info.getAvailableComponentsTypes();
            $scope.widgets = Info.getAvailableComponents();

            $scope.rootElement = [];
            $scope.activeElement = undefined;

            $scope.editingfields = ['title', 'type', 'name', 'data', 'style'];
            $scope.editablesFields = ['name', 'data'];
            $scope.specialFields = ['style'];

            $scope.edDragoverCallback = function (type) {
                var lcondition = $scope.rootElement.length === 0;
                var scondition = Sampler.get(type) !== undefined;
                return lcondition && scondition;
            };
            $scope.edDropCallback = function (type) {
                var sampled = Sampler.get(type);
                return sampled || false;
            };

            $scope.isEditable = function(field) {
                return $scope.editablesFields.indexOf(field) >= 0;
            };
            $scope.isSpecial = function(field) {
                return $scope.specialFields.indexOf(field) >= 0;
            };

            $scope.rootClicked = function() {
                $scope.rootElement[0].active = !$scope.rootElement[0].active;
                if ($scope.rootElement[0].active) {
                    $scope.activeElement = $scope.rootElement[0];
                } else {
                    $scope.activeElement = undefined;
                }
            };

            $scope.runSpecial = function(field) {
                if (field === 'style') {
                    console.log($scope.activeElement[field]);
                }
            };
        }
    ]);
