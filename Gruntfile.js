module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),
 
        // Metadata.
        meta: {
            basePath: '/',
            srcPath: 'less/',
            deployPath: 'css/'
        },
 
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',
 
        // Task configuration.
        less: {
            development: {
                options: {
                  compress: true,
                  yuicompress: true,
                  optimization: 2
                },
                files: {
                    '<%= meta.deployPath %>app.css': '<%= meta.srcPath %>app.less'
                }
            }
        },
 
        watch: {
            scripts: {
                files: [
                    '<%= meta.srcPath %>/**/*.less'
                ],
                tasks: ['less']
            }
        }
 
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    // Default task.
    grunt.registerTask('default', ['less']);
 
};