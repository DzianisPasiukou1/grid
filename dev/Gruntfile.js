﻿module.exports = function (grunt) {
	var fileBase = 'src/';
	var releaseBase = 'release/';
	var distBase = "dist/";

	grunt.initConfig({
		ngtemplates: {
			myapp: {
				options: {
					prefix: '/',
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
			error: {
				files: [fileBase + 'app/**/*.js'],
				tasks: ['jshint'],
				options: {
					interrupt: true
				},
			},
			src: {
				files: [fileBase + 'app/**/*.js'],
				tasks: ['copy:src'],
				options: {
					interrupt: false
				},
			}
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
			css: {
				files: [
					  { expand: true, flatten: true, src: [fileBase + 'css/*.css'], dest: releaseBase + 'styles', filter: 'isFile' }]
			},
			assets: {
				files: [ { expand: true, flatten: true, src: [fileBase + 'assets/fonts/*'], dest: releaseBase + 'assets/fonts', filter: 'isFile' }, { expand: true, flatten: true, src: [fileBase + 'assets/images/*'], dest: releaseBase + 'assets/images', filter: 'isFile' }]
			},
			src: {
				files: [
					{ expand: true, flatten: false, src: [fileBase + '**/*'], dest: distBase, filter: 'isFile' }
				]
			},
			publish:{
				files: [
					{expand: true, flatten: false, src: [fileBase + '**/*'], dest: '../publish/publish', filter: 'isFile' },
					{expand: true, flatten: false, src: [distBase + '**/*'], dest: '../publish/publish', filter: 'isFile' },
					{expand: true, flatten: false, src: [releaseBase + '**/*'], dest: '../publish/publish', filter: 'isFile' },
				]
			}
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
		},
		wiredep: {
			test: {
				src: [
				  distBase + 'test.html'
				],
				options: {
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
	grunt.loadNpmTasks('grunt-wiredep');

	grunt.registerTask('default', [
		'watch:src'
	]);

	grunt.registerTask('error', [
		'watch:error'
	])

	grunt.registerTask('test', [
		'karma'
	])
	
	grunt.registerTask('publish', [
		'copy:publish'
	]);
	
	grunt.registerTask('release', [
		//'clean',
		 'ngtemplates',
		'copy:css',
		'copy:assets',
		'concat',
		'uglify'
	])
};