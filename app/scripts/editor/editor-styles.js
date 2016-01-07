'use strict';

angular.module('samples-module')
    .controller('EditorStylesController', [
        '$scope',
        '$uibModalInstance',

        'element',

        function($scope, $uibModalInstance, element) {
            $scope.element = element;

            console.log($scope.element);

            $scope.siOptions = {
                mode: 'tree'
            };

            $scope.ok = function() {
                $uibModalInstance.close();
            };
        }
    ])
    .factory('editor-styles', [
        '$uibModal',

        function ($uibModal) {

            function show(element) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'scripts/editor/editor-styles.html',
                    controller: 'EditorStylesController',
                    size: 'lg',
                    resolve: {
                        element: function () {
                            return element;
                        }
                    }
                });

            }

            return {
                show: show
            };
        }
    ]);
