'use strict';

angular.module('samples-module')
    .constant('Example_CheckGroup_A', {
        data: {
            title: 'Check Group Without Value',
            type: 'checkgroup',
            name: 'sampleCheckGroupA',
            data: {
                type: 'circle',
                max: 5
            },
            style: {
                color: 'black'
            }
        }
    })
    .constant('Example_CheckGroup_B', {
        data: {
            title: 'Check Group With Value and Minimun value',
            type: 'checkgroup',
            name: 'sampleCheckGroupB',
            data: {
                type: 'slim-circle',
                min: 1,
                max: 5,
                value: 3
            },
            style: {
                color: 'black'
            }
        }
    })
    .constant('Example_CheckGroup_C', {
        data: {
            title: 'Larger Check Group With Value',
            type: 'hblock',
            name: 'smapleHBlockCheckSample',
            data: [{
                title: 'Larger Check Group With Value',
                type: 'checkgroup',
                name: 'sampleCheckGroupC',
                data: {
                    type: 'square',
                    min: 0,
                    max: 20,
                    value: 7
                },
                style: {
                    color: 'black'
                }
            }],
            style: {
                border: '2px solid red',
                height: '46px',
                width: '208px'
            }
        }
    })
    .run([
        'SamplesService',

        'Example_CheckGroup_A',
        'Example_CheckGroup_B',
        'Example_CheckGroup_C',

        function (SamplesService, Example_CheckGroup_A, Example_CheckGroup_B, Example_CheckGroup_C) {

            SamplesService.createRegion('checkgroup');
            SamplesService.configureRegion('checkgroup', {
                title: 'Check Group',
                description: 'Check Group Blocks.',
                examples: [
                    'Example_CheckGroup_A',
                    'Example_CheckGroup_B',
                    'Example_CheckGroup_C'
                ]
            });
            SamplesService.register('checkgroup', 'Example_CheckGroup_A', Example_CheckGroup_A);
            SamplesService.register('checkgroup', 'Example_CheckGroup_B', Example_CheckGroup_B);
            SamplesService.register('checkgroup', 'Example_CheckGroup_C', Example_CheckGroup_C);
        }
    ]);
