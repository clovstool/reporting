/*global module */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            folder: ["dist/*"]
        },
        jshint: {
            devel: {
                options: {
                    asi: false,
                    browser: true,
                    devel: true,
                    debug: true
                },
                src: "src/*.js"
            },
            release: {
                options: {
                    browser: true
                },
                src: "src/*.js"
            }
        },
        uglify: {
            all: {
                src: "dist/<%=pkg.name%>.js",
                dest: "dist/<%=pkg.name%>.min.js"
            }
        },
        rig: {
            devel: {
                expand: true,
                cwd: "src/build/",
                src: '*.js',
                dest: 'dist/'
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: 'timestamp',
                        replacement: '<%= grunt.template.today() %>'
                    }, {
                        match: 'version',
                        replacement: '<%= pkg.version %><%= grunt.config("buildNumber") %>'
                    }, {
                        match: 'package-name',
                        replacement: '<%= pkg.name %>'
                    }]
                },
                src: "dist/*.js",
                dest: "./"
            }
        },
        bump: {
            files: ['package.json', 'bower.json']
        },
        watch: {
            files: ['Gruntfile.js', 'src/<%=pkg.name%>.js', 'src/template.html', 'src/style.css'],
            tasks: ["default"]
        }
    });
    grunt.loadNpmTasks('grunt-rigger');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-bumpx');
    //grunt.registerTask('default', ['clean', 'jshint:devel', 'rig', 'copy']);
    grunt.registerTask('default', ['clean', 'rig']);
    grunt.registerTask('release', ['clean', 'jshint:release', 'rig', 'uglify']);
};