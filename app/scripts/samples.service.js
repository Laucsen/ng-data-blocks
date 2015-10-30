'use strict';

angular.module('samples-module')
  .factory('SamplesService', [

    function() {
      var regions = [];
      var regionsData = {};
      var datas = {};

      return {
        createRegion: function(reg) {
          if (regions.indexOf(reg) === -1) {
            regions.push(reg);
          }
        },
        getRegions: function() {
          return regions;
        },
        configureRegion: function(reg, regDat) {
          if (regions.indexOf(reg) === -1) {
            throw 'Undefined Region: ' + reg;
          }

          regionsData[reg] = regDat;
        },
        getRegionData: function(region) {
          return regionsData[region];
        },
        getData: function(dataname) {
          return datas[dataname];
        },
        register: function(region, dataname, data) {

          if (regions.indexOf(region) === -1) {
            throw 'Undefined Region: ' + region;
          }

          datas[dataname] = data;
        }
      };
    }
  ]);
