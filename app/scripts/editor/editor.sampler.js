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
    ]);
