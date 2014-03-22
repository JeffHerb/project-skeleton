// Grunt JS
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Read the project package json
    pkg: grunt.file.readJSON('package.json'),

    // Coffe Compiler
    coffee: {
      files: [{
        expand: true,
        flatten: true,
        cwd: 'assets/coffee',
        src: ['**/*.coffee'],
        dest: 'assets/js',
        ext: '.js'
      }]
    },

    // Sass Compiler
    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: [{
          expand: true,
          flatten: true,
          cwd: 'assets/scss',
          src: ['**/*.scss','!**/_*.scss'],
          dest: 'assets/css/',
          ext: ".css"
        }]
      }
    },

    // Watch task
    watch: {
      options: {
        livereload: true,
      },

      // Watch for coffee script files
      coffee: {
        files: ['assets/coffee/**/*.coffee'],
        tasks: ['coffee']
      },

      // Watch for changes specifically inside of the 
      sass: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass']
      },

      // Task just to kick livereload to reload the page for me!
      pages: {
        files: ['**/*.html', '**/*.php'],
        tasks: []
      }

    }

  });

  // Contrib Plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // None Contrib Plugins
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'coffee']);

};