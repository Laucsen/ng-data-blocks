'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    //--------
    config: {
      version: require('./bower').version,
      app: 'app',
      dist: 'dist',
      src: 'lib',
    },
    //--------

    //--------
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      dev: {
        files: [
          '<%= config.app %>/**/*.*'
        ],
        tasks: ['newer:jshint'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
    },
    //--------
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '127.0.0.1',
        livereload: 35729
      },
      livereload: {
        options: {
          open: 'http://127.0.0.1:9000',
          base: [
            '<%= config.app %>',
            '<%= config.src %>',
            '.tmp'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '<%= config.src %>',
            '.tmp'
          ]
        }
      },
      dist: {
        options: {
          open: 'http://127.0.0.1:9000',
          base: [
            '<%= config.dist %>',
            '.app'
          ]
        }
      }
    },
    //--------

    //--------
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        // reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    //--------
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/{,*/}*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    //--------
    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= config.app %>/index.html']
      },
      sass: {
        src: ['<%= config.lib %>/scripts/{,**/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },
    //--------

  });

  grunt.registerTask('serve', 'Compile then starts a web server', function() {
    // if (target === 'dist') {
    //   return grunt.task.run(['build', 'connect:dist:keepalive']);
    // }

    grunt.task.run([
      'clean:server',
      'wiredep',

      'connect:livereload',

      'watch'
    ]);
  });

  grunt.registerTask('default', ['jshint']);

};
