'use strict';

angular.module('samples-module')
  .constant('Example_Input', {
    data: {
      title: 'Input',
      type: 'input',
      name: 'smapleInputBlock',
      value: 'Sample Info',
      style: {
        border: '1px solid gray',
        color: 'black'
      }
    }
  })
  .run([
    'SamplesService',

    'Example_Input',

    function(SamplesService, Example_Input) {

      SamplesService.createRegion('input');
      SamplesService.configureRegion('input', {
        title: 'Input',
        description: 'Input Blocks.',
        examples: [
          'Example_Input'
        ]
      });
      SamplesService.register('input', 'Example_Input', Example_Input);
    }
  ])
