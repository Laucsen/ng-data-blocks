'use strict';

angular.module('samples-module')
  .constant('Example_ImageUrl', {
    data: {
      title: 'Image Url',
      type: 'image',
      name: 'smapleImage',
      value: 'images/mageawakening.png',
      style: {
        border: '2px solid gray',
        height: '150px'
      }
    },
    actions: {
      value: {
        title: 'Select a Image to dynamic change of values',
        values: [
          'images/mageawakening.png',
          'images/wod.png'
        ]
      }
    }
  });
