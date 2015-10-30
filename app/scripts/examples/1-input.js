'use strict';

angular.module('samples-module')
  .constant('Example_Input', {
    data: {
      title: 'String Input',
      type: 'input',
      name: 'smapleInputBlock',
      data: {
        type: 'text',
        value: 'Sample Info'
      },
      style: {
        border: '1px solid gray',
        color: 'black'
      }
    }
  })
  .constant('Example_Input_Numeric', {
    data: {
      title: 'Numeric Input',
      type: 'input',
      name: 'smapleNumericBlock',
      data: {
        type: 'number',
        value: 55
      },
      style: {
        border: '1px solid gray',
        color: 'black'
      }
    }
  })
  .constant('Example_Input_Numeric_Validation', {
    data: {
      title: 'Numeric Input With Validation',
      type: 'input',
      name: 'smapleNumericBlock',
      data: {
        type: 'number',
        value: 55,
        min: 54,
        max: 56
      },
      style: {
        border: '1px solid gray',
        color: 'black'
      }
    }
  })
  .run([
    'SamplesService',

    'Example_Input_Numeric',
    'Example_Input_Numeric_Validation',
    'Example_Input',

    function(SamplesService, Example_Input_Numeric, Example_Input_Numeric_Validation, Example_Input) {

      SamplesService.createRegion('input');
      SamplesService.configureRegion('input', {
        title: 'Input',
        description: 'Input Blocks.',
        examples: [
          'Example_Input',
          'Example_Input_Numeric',
          'Example_Input_Numeric_Validation'
        ]
      });
      SamplesService.register('input', 'Example_Input_Numeric', Example_Input_Numeric);
      SamplesService.register('input', 'Example_Input_Numeric_Validation', Example_Input_Numeric_Validation);
      SamplesService.register('input', 'Example_Input', Example_Input);
    }
  ])
