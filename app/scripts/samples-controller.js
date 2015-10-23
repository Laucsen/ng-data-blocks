'use strict';

angular.module('samples-module', [
    'ng-data-blocks'
  ])
  .controller('samples-controller', [
    '$scope',

    'sample-encoded-image-a',

    function($scope, sampleEncodedImageA) {

      // Image url example
      $scope.imageBloc = {
        title: 'Image Url',
        type: 'image',
        name: 'smapleImage',
        value: 'images/mageawakening.png',
        css: {
          border: '1px solid red',
          height: '150px'
        }
      };

      // Encoded imagem example
      $scope.image64Bloc = {
        title: 'Image 64',
        type: 'image',
        name: 'smapleImage',
        value: sampleEncodedImageA,
        css: {
          border: '1px solid red',
          height: '300px',
          padding: '4px'
        }
      };

      // TODO: get and set to each created block?

    }
  ]);
