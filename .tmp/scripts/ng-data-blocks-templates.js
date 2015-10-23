// --- Start of Template Session ---
angular.module('ng-data-blocks.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('ng-data-blocks.html',
    '<div class=ng-data-blocks><div ng-if="check(data, \'image\')"><img ng-src={{data.value}} ng-style=data.css></div><div ng-if=!isAvailable(data.type)>Unavailable Type!</div></div>');
}]);
// --- End of Template Session ---
