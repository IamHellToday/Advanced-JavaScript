module.exports = function(grunt) {
    
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/'
            }]
        }
    },
    watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        } 
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'Project-1/css/*.css',
                    'Project-1/*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    }
  })
  
  // Load the plugins tasks 
//   kompilacja sass->css
  grunt.loadNpmTasks('grunt-sass');
//   Optymalizacja obrazków
  grunt.loadNpmTasks('grunt-contrib-imagemin');
//   Auto zapis
  grunt.loadNpmTasks('grunt-contrib-watch');
//  Web Sync
    grunt.loadNpmTasks('grunt-browser-sync');
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
//   grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};