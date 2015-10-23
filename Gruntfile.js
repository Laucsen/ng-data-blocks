'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    //--------
    config: {
      name: require('./bower').name,
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
      js: {
        files: [
          '<%= config.src %>/**/*.js'
        ],
        tasks: ['injector']
      },
      html2js: {
        files: [
          '<%= config.src %>/{,**/}*.html'
        ],
        tasks: ['html2js', 'injector'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },
    //--------
    // The actual grunt server settings
    connect: {
      options: {
        port: 8080,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '127.0.0.1',
        livereload: 35731
      },
      livereload: {
        options: {
          open: 'http://127.0.0.1:8080',
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
          open: 'http://127.0.0.1:8080',
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
    // Injector
    //--------
    injector: {
      options: {},
      // Injects sample application JS files into index.html
      js: {
        options: {
          transform: function(filePath) {
            filePath = filePath.replace('/lib/', '');
            filePath = filePath.replace('/.tmp/', '');
            return '<script src="' + filePath + '"></script>';
          },
          starttag: '<!-- injector:js -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= config.app %>/index.html': [
            [
              '<%= config.src %>/**/*.js',
              '.tmp/scripts/**/*.js',
              '!<%= config.src %>/ng-data-blocks.js'
            ]
          ]
        }
      },
    },
    //--------
    // Task to create JS files to cache all application views.
    html2js: {
      options: {
        base: '<%= config.src %>',
        target: 'js',
        singleModule: true,
        quoteChar: '\'',
        fileHeaderString: '// --- Start of Template Session ---',
        fileFooterString: '// --- End of Template Session ---',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      },
      build: {
        options: {
          module: '<%= config.name %>.templates',
          useStrict: true
        },
        src: ['<%= config.src %>/{,**/}*.html'],
        dest: '.tmp/scripts/<%= config.name %>-templates.js'
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

      'html2js',

      'injector',

      'connect:livereload',

      'watch'
    ]);
  });

  grunt.registerTask('default', ['jshint']);

};
