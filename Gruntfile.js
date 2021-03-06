module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),        
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'js/vendor'
                },
                files: {
                    'jquery/jquery.js': 'jquery/dist/jquery.js',
                    'angular/angular.js': 'angular/angular.js'
                }
            },
            stylesheets: {
                options: {
                    destPrefix: 'css/vendor'
                },
                files: {
                    'bootstrap/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                }
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-bowercopy');

    // Default task(s).
    grunt.registerTask('default', ['bowercopy']);

};
