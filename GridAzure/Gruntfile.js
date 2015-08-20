module.exports = function (grunt) {
	var fileBase = 'src/';
	var releaseBase = 'release/';

	grunt.initConfig({
		ngtemplates: {
			myapp: {
				options: {
					base: "",
					module: "gridTaskApp",
				},
				src: fileBase + "app/templates/**/*.html",
				dest: fileBase + "app/templates.js"
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		uglify: {
			options: {

			},
			my_target: {
				files: {
					'release/grid.min.js': [fileBase + 'app/**/*.js']
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'release/grid.min.css': [fileBase + 'css/styles.css']
				}
			}
		},
		watch: {
			scripts: {
				files: [fileBase + 'app/**/*.js'],
				tasks: ['jshint'],
				options: {
					interrupt: true
				},
			},
		},
		jshint: {
			options: {
				"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"undef": true,
				"globals": {
					"jQuery": true,
					"angular": true,
					"d3": true
				}
			},
			files: {
				src: [fileBase + 'app/**/*.js']
			},
		},
		copy: {
			main: {
				files: [
					  { expand: true, flatten: true, src: [fileBase + 'css/*.css'], dest: releaseBase, filter: 'isFile' }, { expand: true, flatten: true, src: [fileBase + 'data/**/*.json'], dest: releaseBase + 'json', filter: 'isFile' }, { expand: true, flatten: true, src: [fileBase + 'css/fonts/*'], dest: releaseBase + 'fonts', filter: 'isFile' }, { expand: true, flatten: true, src: [fileBase + 'css/images/*'], dest: releaseBase + 'images', filter: 'isFile' }
				]
			},
		},
		concat: {
			basic: {
				src: [fileBase + 'app/**/*.js'],
				dest: releaseBase + 'grid.js',
			}
		},
		clean: [releaseBase],
		bundler: {
			bundle: {
				views: ['index.html'],
				bundles: {
					'css': {
						type: 'css',
						files: [releaseBase + '*.css']
					},
					'js': {
						type: 'js',
						files: [releaseBase + '*.js']
					},
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-bundler');
	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.registerTask('default', [
	]);

	grunt.registerTask('test', [
		'karma'
	])

	grunt.registerTask('release', [
		'clean',
		 'ngtemplates', //templatecache
		'copy', //copy css
		'concat', //concat scripts
		'uglify' //minimize scripts
	])
};