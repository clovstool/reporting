/*global module */
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			folder: ["dist/*"]
		},
		jshint: {
			devel: {
				options: grunt.file.readJSON("./components/project-settings/jshint-dev.json"),
				src: ['src/**/*.js', '!src/btg.js']
			},
			release: {
				options: grunt.file.readJSON("./components/project-settings/jshint.json"),
				src: ['src/**/*.js', '!src/btg.js']
			}
		},
		uglify: {
			all: {
				options: {
					sourceMap: true
				},
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
		copy: {
			test: {
				src: "test/**/*",
				dest: "dist/"
			},
			components: {
				src: "components/**/*.{js,css}",
				dest: "dist/test/"
			}
		},
		bump: {
			files: ['package.json', 'bower.json']
		},
		watch: {
			files: ['Gruntfile.js', 'src/**/*', 'test/**/*'],
			tasks: ['default']
		}
	});
	grunt.loadNpmTasks('grunt-rigger');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-bumpx');
	grunt.registerTask('default', ['clean', 'jshint:devel', 'rig', 'replace', 'copy']);
	grunt.registerTask('release', ['clean', 'jshint:release', 'rig', 'replace', 'uglify', 'copy']);
};