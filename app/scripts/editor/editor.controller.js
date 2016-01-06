'use strict';

angular.module('samples-module')
    .factory('editor-sampler', [
        function () {

            function get(type) {
                if (type === 'label') {
                    return {
                        title: 'Label',
                        type: 'label',
                        name: '',
                        data: 'Label',
                        style: {
                            color: '#110022',
                            'font-size': '12px'
                        }
                    };
                }
                return undefined;
            }

            return {
                get: get
            };
        }
    ])
    .controller('editor-controller', [
        '$scope',

        'ng-data-blocks-info',

        'editor-sampler',

        function ($scope, Info, Sampler) {

            $scope.availableTypes = Info.getAvailableComponentsTypes();
            $scope.widgets = Info.getAvailableComponents();

            $scope.rootElement = [];

            $scope.edDragoverCallback = function (type) {
                var lcondition = $scope.rootElement.length === 0;
                var scondition = Sampler.get(type) !== undefined;
                return lcondition && scondition;
            };
            $scope.edDropCallback = function (type) {
                var sampled = Sampler.get(type);
                return sampled || false;
            };
        }
    ]);
