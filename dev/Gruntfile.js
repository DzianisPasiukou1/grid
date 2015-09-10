var path = require('path');

module.exports = function (grunt) {
	var fileBase = 'src/';
	var releaseBase = 'release/';
	var distBase = 'dist/';
	
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
            basePath: '/',
            srcPath: fileBase,
			devPath: distBase,
            deployPath: releaseBase
        },
		port: process.env.PORT || 9000,
		mainModuleName: 'ext',
		azureModuleName: 'azureApp',
		fixturesPath: releaseBase,
		jsdoc: {
			options: {
				destination: 'doc'
			},
			src: ['<%=meta.srcPath%>app/ext.common/**/*.js']
		},
		ngdocs: {
			options: {
				dest: 'docs',
				html5Mode: false,
				scripts: [
					'<%=meta.srcPath%>vendor/angular/angular.js'
				]
			},
			api: {
				src: ['<%=meta.srcPath%>app/**/*.js', '!<%=meta.srcPath%>app/**/*.Spec.js'],
				title: 'Docs'
			}
		},
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			target: ['<%=meta.srcPath%>app/**/*.js']
		},
		ngtemplates: {
			ext: {
				options: {
					prefix: '/',
					module:'ext'
				},
				src: '<%=meta.srcPath%>app/**/*.html',
				dest: '<%=meta.srcPath%>app/templates.js'
			},
			azure: {
				options: {
					prefix: '/',
					module: 'azureApp'
				},
				src: '<%=meta.devPath%>azure-app/**/*.html',
				dest: '<%=meta.devPath%>azure-app/templates.js'
			}
		},
		uglify: {
			ext: {
				files: {
					'<%=meta.devPath%>src/ext.min.js': ['<%=meta.devPath%>src/ext.js']
				}
			},
			azure: {
				files: {
					'<%=meta.devPath%>azure-app/azure.min.js': ['<%=meta.devPath%>azure-app/azure.js']
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
					'<%=meta.srcPath%>css/styles.min.css': ['<%=meta.srcPath%>css/styles.css']
				}
			}
		},
		copy: {
			css: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['<%=meta.srcPath%>css/*.css'],
						dest: '<%=meta.deployPath%>styles',
						filter: 'isFile'
					}
				]
			},
			assets: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['<%=meta.srcPath%>assets/fonts/*'],
						dest: '<%=meta.deployPath%>assets/fonts',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: ['<%=meta.srcPath%>assets/images/*'],
						dest: '<%=meta.deployPath%>assets/images',
						filter: 'isFile'
					}
				]
			},
			publish: {
				files: [
					{
						expand: true,
						flatten: false,
						src: [fileBase + '**/*'],
						dest: '../publish/publish',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: false,
						src: [distBase + '**/*'],
						dest: '../publish/publish',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: false,
						src: [releaseBase + '**/*'],
						dest: '../publish/publish',
						filter: 'isFile'
					},
				]
			}
		},
		clean:
		{ release: {
			src: [releaseBase]
		},
			buildScripts: {
				src: [
					'<%= meta.devPath%>src/ext.js',
					'<%= meta.devPath%>azure-app/azure.js'
				]
			}
		},
		wiredep: {
			options: {
				dependencies: true,
				compress: true
			},
			index: {
				src: [
					'<%=meta.devPath%>index.html'
				],
			}
		},
		'angular-builder': {
			ext: {
				options: {
					mainModule: '<%=mainModuleName%>',
					externalModules: [
						'ngGrid',
						'pascalprecht.translate',
						'ui.grid',
						'ui.grid.selection',
						'ui.grid.expandable',
						'ui.select2'
					]
				},
				src: '<%= meta.srcPath%>app/**/*.js',
				dest: '<%= meta.devPath%>src/ext.js'
			},
			azureApp: {
				options: {
					mainModule: '<%=azureModuleName%>',
					externalModules: [
						'ngGrid',
						'pascalprecht.translate',
						'ui.grid',
						'ui.grid.selection',
						'ui.grid.expandable',
						'ui.select2',
						'ngRoute',
						'ext'
					]
				},
				src: [
					'<%= meta.devPath%>azure-app/**/*.js',
				],
				dest: '<%= meta.devPath%>azure-app/azure.js'
			}
		},
		sass: {
			compile: {
				files: [
					{
						style: 'compressed',
						src: ['<%=meta.srcPath%>css/**/*.scss'],
						dest: 'src/css/styles.css'
					}
				]
			}
		},
		express: {
			dev: {
				options: {
					port: '<%=port%>',
					script: 'server.js'
				}
			}
		},
		htmlbuild: {
			release: {
				src: '<%= meta.devPath %>index.html',
				dest:'<%= meta.deployPath %>main.html',
				options: {
					beautify: true,
					relative: false,
					scripts: {
						ext: [
							'<%= meta.deployPath %>ext.min.js'
						],
						azure: [
							'<%= meta.deployPath %>azure-app/azure.min.js'
						]
					},
					styles: {
						bundle: [
							'<%= meta.deployPath %>styles/styles.min.css',
						]
					}
				}
			}
		},
		replace: {
			azure: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['../publish/publish/release/main.html'],
						dest: '../publish/publish'
					}
				]
			}
		},
		watch: {
			sass: {
				files: ['<%=meta.srcPath%>css/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
					livereload: false,
					port: '<%=port%>'
				}
			},
			scripts: {
				files: ['<%=meta.srcPath%>app/**/*.js'],
				tasks: ['debug'],
				options: {
					spawn: false,
					livereload: false,
					port: '<%=port%>'
				},
			},
			templates: {
				files: [
					'<%=meta.srcPath%>app/**/*.html',
					'<%=meta.devPath%>**/*.html'
				],
				tasks: ['ngtemplates'],
				options: {
					spawn: false
				}
			},
			configFiles: {
				 files: [ 'Gruntfile.js', 'package.json' ],
  				  options: {
    				  reload: true
				 }
			},
			bower: {
				files: ['<%=meta.srcPath%>vendor/**/*.js'],
				tasks: ['wiredep']
			}
		},
		shell: {
			openSite: {
				command: 'start http://localhost:<%=port%>'
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		protractor: {
			test: {
				options: {
					configFile: 'protractor.conf.js',
					keepAlive: true,
					noColor: false
				}
			}
		},
		'protractor_webdriver': {
			targ: {
				options: {
					command: 'webdriver-manager start'
				}
			}
		}
	});
	
	grunt.registerTask('default', [
		'wiredep',
		'sass',
		'debug',
		'server',
		'watch'
	]);

	grunt.registerTask('unit', [
		'karma'
	]);
	
	grunt.registerTask('e2e', [
		'protractor'
	]);
	
	grunt.registerTask('debug', [
		'ngtemplates',
		'clean:buildScripts',
		'angular-builder::debug'
	]);

	grunt.registerTask('publish', [
		'index-release',
		'compile-sass',
		'ngtemplates',
		'copy:css',
		'copy:assets',
		'uglify:ext',
		'copy:publish',
		'replace:azure'
	]);

	grunt.registerTask('compile-sass', [
		'sass',
		'cssmin'
	]);

	grunt.registerTask('server', [
		'shell',
		'express:dev'
	]);
	
	grunt.registerTask('reload-server', [
		'express:dev'
	]);
	
	grunt.registerTask('index-release', [
		'uglify:azure',
		'htmlbuild'
	]);

	grunt.registerTask('dev', [
		'htmlbuild:index',
		'watch:htmlbuild'
	]);
	
	grunt.registerTask('release', [
		'clean:buildScripts',
		'angular-builder'
	]);
};