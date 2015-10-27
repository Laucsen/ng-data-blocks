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
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/index.html',
          '.tmp/styles/{,**/}*.css',
          '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        ]
      },
      js: {
        files: [
          '<%= config.app %>/**/*.js',
          '<%= config.src %>/**/*.js'
        ],
        tasks: ['newer:jshint'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      injectorjs: {
        files: [
          '<%= config.src %>/**/*.js'
        ],
        tasks: ['injector:js']
      },
      injectorexamplesjs: {
        files: [
          '<%= config.app %>/**/*.js'
        ],
        tasks: ['newer:jshint', 'injector:examplesjs']
      },
      html2js: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.src %>/{,**/}*.html'
        ],
        tasks: ['html2js:build', 'injector:js']
      },
      html2jsExamples: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/scripts/{,**/}*.html'
        ],
        tasks: ['html2js:examples', 'injector:examplesjs']
      },
      compass: {
        files: [
          '<%= config.app %>/scripts/**/*.scss'
        ],
        tasks: ['compass:server', 'autoprefixer']
      },
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
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/lib/', '');
          filePath = filePath.replace('/app/', '');
          filePath = filePath.replace('/.tmp/', '');
          return '<script src="' + filePath + '"></script>';
        }
      },
      // Injects sample application JS files into index.html
      js: {
        options: {
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
      examplesjs: {
        options: {
          starttag: '<!-- injector:examplesjs -->',
          endtag: '<!-- endinjector -->'
        },
        files: {
          '<%= config.app %>/index.html': [
            [
              '<%= config.app %>/scripts/**/*.js',
              '.tmp/scripts/ng-data-blocks.examples-templates.js',
              '!<%= config.app %>/scripts/samples.js'
            ]
          ]
        }
      }
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
      },
      examples: {
        base: '<%= config.app %>',
        options: {
          module: '<%= config.name %>.examples.templates',
          useStrict: true
        },
        src: ['<%= config.app %>/scripts/{,**/}*.html'],
        dest: '.tmp/scripts/<%= config.name %>.examples-templates.js'
      }
    },
    //--------
    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.app %>/scripts',
        cssDir: '.tmp/styles',
        // generatedImagesDir: '.tmp/images/generated',
        // javascriptsDir: '<%= yeoman.src %>/scripts',
        // fontsDir: '<%= yeoman.src %>/assets/fonts',
        // importPath: [
        //   './<%= yeoman.app %>/bower_components',
        //   '.tmp/scss'
        // ],
        // httpGeneratedImagesPath: '/images/generated',
        // httpFontsPath: '/assets/fonts',
        // relativeAssets: false,
        // assetCacheBuster: false,
        // raw: 'Sass::Script::Number.precision = 10\n'
      },
      server: {
        options: {
          // debugInfo: true,
          // imagesDir: '<%= config.app %>/assets/images',
          // httpImagesPath: '../assets/images'
        }
      },
      dist: {
        options: {}
      }
    },
    //--------
    // Run some tasks in parallel to speed up the build process
    concurrent: {
      limit: 1,
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },
    //--------
    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
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

      'concurrent:server',
      'autoprefixer',

      'connect:livereload',

      'watch'
    ]);
  });

  grunt.registerTask('default', ['jshint']);

};
