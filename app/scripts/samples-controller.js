'use strict';

angular.module('samples-module', [
    'ng-data-blocks',

    'ng.jsoneditor'
  ])
  .controller('samples-controller', [
    '$scope',

    'sample-encoded-image-a',

    function($scope, sampleEncodedImageA) {

      $scope.options = {
        mode: 'tree'
      };

      //-----------------
      // Image url example
      $scope.imageBloc = {
        title: 'Image Url',
        type: 'image',
        name: 'smapleImage',
        value: 'images/mageawakening.png',
        style: {
          border: '2px solid gray',
          height: '150px'
        }
      };
      $scope.imageBlockOptions = {
        value: {
          title: 'Select a Image to dynamic change of values',
          values: [
            'images/mageawakening.png',
            'images/wod.png'
          ]
        }
      };
      //-----------------
      //-----------------

      //-----------------
      // Encoded imagem example
      $scope.image64Bloc = {
        title: 'Image 64',
        type: 'image',
        name: 'smapleImage',
        value: sampleEncodedImageA,
        style: {
          height: '100px',
          padding: '4px'
        }
      };
      //-----------------

      // TODO: get and set to each created block?

    }
  ]);
