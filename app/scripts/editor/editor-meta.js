'use strict';

angular.module('samples-module')
    .service('EdLabel', [
        function () {
            return {
                data: {
                    title: 'Label',
                    type: 'label',
                    name: '',
                    data: 'Label',
                    style: {
                        color: '#110022',
                        'font-size': '12px'
                    }
                },
                fields: ['title', 'type', 'name', 'data', 'style'],
                editable: ['name', 'data'],
                special: ['style']
            };
        }
    ])
    .factory('editor-meta', [
        'EdLabel',

        function (EdLabel) {

            var elements = [EdLabel];

            function get(type) {
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].data.type === type) {
                        return elements[i];
                    }
                }
                return undefined;
            }

            return {
                get: get,
                isElement: function (type) {
                    return get(type) !== undefined;
                }
            };
        }
    ]);
