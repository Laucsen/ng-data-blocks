'use strict';

angular.module('ng-data-blocks')
    .factory('ng-data-blocks-info', [
        function () {

            var ngWidgets = [{
                name: 'Text Label',
                type: 'label'
            }, {
                name: 'Image',
                type: 'image'
            }, {
                name: 'Text Input',
                type: 'input'
            }, {
                name: 'Horizontal Layout',
                type: 'hblock'
            }, {
                name: 'Vertical Layout',
                type: 'vblock'
            }, {
                name: 'Group Layout',
                type: 'gblock'
            }, {
                name: 'Check Group',
                type: 'checkgroup'
            }];

            function getAvailableComponentsTypes() {
                var result = [];
                angular.forEach(ngWidgets, function (element) {
                    result.push(element.type);
                });
                return result;
            }

            return {
                /**
                 * Get all available widget.
                 * @return Array with all widgets information.
                 */
                getAvailableComponents: function() {
                    return ngWidgets;
                },

                /**
                 * Get all available widgets types.
                 */
                getAvailableComponentsTypes: getAvailableComponentsTypes
            };
        }
    ]);
