module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [['public/javascripts/vendor/*.js'], 'public/javascripts/utilities.js', 'public/javascripts/main.js', 'public/javascripts/content_editable.js', 'public/javascripts/intro.js'],
        dest: 'public/dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/javascripts/*.js']
    },
    svgstore: {
      options: {
        prefix : 'shape-',
        svg: {
          style: 'display: none;',
          viewBox : '0 0 100 100',
          xmlns: 'http://www.w3.org/2000/svg'
        }
      },
      your_target: {
        files: {
          'public/dist/dist.svg': ['svg/*.svg'],
        }
      },
    },
    browserSync: {
      bsFiles: {
        src : 'dist/main.min.css'
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9']
      },
      your_target: {
        files: {
          'public/dist/main.min.css': ['public/stylesheets/main.css'],
        }
      }
    },
    watch: {
      css: {
        files: ['public/stylesheets/main.css'],
        tasks: ['autoprefixer']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat', 'uglify']
      },
      svg: {
        files: ['svg/*.svg'],
        tasks: ['svgstore']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-tenon-client');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'svgstore', 'autoprefixer', 'browserSync']);

};
