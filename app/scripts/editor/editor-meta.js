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
                special: ['style'],
                metadata: 'string'
            };
        }
    ])
    .service('EdImage', [
        function () {
            return {
                data: {
                    title: 'Image Url',
                    type: 'image',
                    name: '',
                    data: 'images/mageawakening.png',
                    style: {
                        border: '2px solid gray',
                        height: '150px'
                    }
                },
                fields: ['title', 'type', 'name', 'data', 'style'],
                editable: ['name', 'data'],
                special: ['style'],
                metadata: 'string'
            };
        }
    ])
    .service('EdInput', [
        function() {
            return {
                data: {
                    title: 'Input',
                    type: 'input',
                    name: '',
                    data: {
                        type: 'text',
                        value: 'Sample Info'
                    },
                    style: {
                        border: '1px solid gray',
                        color: 'black'
                    }
                },
                fields: ['title', 'type', 'name', 'data', 'style'],
                editable: ['name', 'data'],
                special: ['style'],
                metadata: {
                    type: ['number', 'text'],
                    value: 'string'
                }
            };
        }
    ])
    .factory('editor-meta', [
        'EdLabel',
        'EdImage',
        'EdInput',

        function (EdLabel, EdImage, EdInput) {

            var elements = [EdLabel, EdImage, EdInput];

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
