'use strict';

angular.module('samples-module', [
    'ng-data-blocks'
  ])
  .controller('samples-controller', [
    '$scope',

    'sample-encoded-image',

    function($scope, sampleEncodedImage) {

      $scope.imageBloc = {
        type: 'image',
        name: 'smapleImage',
        value: 'images/mageawakening.png',
        css: {
          border: '1px solid red',
          height: '150px'
        }
      };

      $scope.image64Bloc = {
        type: 'image',
        name: 'smapleImage',
        value: 'data:image/jpg;base64,' + sampleEncodedImage,
        css: {
          border: '1px solid red',
          height: '300px',
          padding: '4px'
        }
      };

    }
  ]);
