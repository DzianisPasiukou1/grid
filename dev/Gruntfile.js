module.exports = function (grunt) {
	var fileBase = 'src/';
	var releaseBase = 'release/';
	var distBase = "dist/";

	grunt.initConfig({
		 pkg: grunt.file.readJSON('package.json'),
		 meta: {
            basePath: '/',
            srcPath: fileBase,
			devPath: distBase,
            deployPath: releaseBase
        },
		fixturesPath: releaseBase,
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
		protractor:{
			test:{
				options:{
				configFile: "protractor.conf.js",
				keepAlive: true,
				noColor: false
				}
			}
		},
		webdrivermanager:{
			out_dir: './selenium',
			capabilities: {
				browserName: 'chrome'
			},
			seleniumArgs: [],
			seleniumPort: 4444,
			ignore_ssl: false,
			proxy: false,
			method: 'GET'
		},
		protractor_webdriver:{
			targ:{
				options:{
					command: 'webdriver-manager start'
				}
			}
		},
		uglify: {
			grid: {
				files: {
					'release/grid.min.js': [fileBase + 'app/**/*.js']
				}
			},
			azure: {
				files: {
					'dist/azure-app/azure.min.js': [distBase + 'azure-app/**/*.js', '!' + distBase + 'azure-app/azure.js','!' +  distBase + 'azure-app/azure.min.js']
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
					'src/css/styles.min.css': [fileBase + 'css/styles.css']
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				port: 9000
			},
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
			},
			sass: {
				files: [fileBase + 'css/**/*.scss'],
				tasks: ['sass', 'cssmin'],
				options: {
					livereload: true,
					 port: 9000,
				}
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
			grid: {
				src: [fileBase + 'app/**/*.js'],
				dest: releaseBase + 'grid.js',
			},
			azure: {
				src: [distBase + 'azure-app/**/*.js', '!' + distBase + 'azure-app/azure.js','!' +  distBase + 'azure-app/azure.min.js'],
				dest: distBase + '/azure-app/azure.js',
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

		},
		'angular-builder': {
			options:{
				mainModule: 'gridTaskApp'
			},
			app: {
			 	src: 'src/**/*.js',
				 dest: 'release/test.js'
			}
		},
		sass:{
			compile: {
				files: [
               	 {
					style: 'compressed',
                    src: ["src/css/styles.scss"],
                    dest: "src/css/styles.css",
               	 }
            	]
			}
		},
		express:{
			dev:{
				options: {
					script: 'server.js',
					background: false,
					port: 9000
				}
			}
		},
		 htmlbuild: {
       	 release: {
            src: distBase + 'index.html',
            dest: releaseBase + 'main.html',
            options: {
                beautify: true,
                relative: false,
                scripts: {
                    grid: [
                        '<%= meta.deployPath %>grid.min.js'
                    ],
					azure: [
						'<%= meta.devPath %>/azure-app/azure.min.js'
					]
                },
                styles: {
                    bundle: [
                        '<%= meta.deployPath %>/styles/styles.min.css',
                    ]
                },
                sections: {
                    views: '<%= fixturesPath %>/views/**/*.html',
                    templates: '<%= fixturesPath %>/templates/**/*.html',
                    layout: {
                        header: '<%= fixturesPath %>/layout/header.html',
                        footer: '<%= fixturesPath %>/layout/footer.html'
                    }
                },
                data: {
                    version: "0.1.0",
                    title: "test",
                },
            }
        },
		 },
		replace: {
			azure:{
				files: [
					{expand: true, flatten: true, src:['../publish/publish/release/main.html'], dest:'../publish/publish'}
				]
			}
		},
		shell:{
			openSite: {
				command: 'start http://localhost:9000'
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
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-bundler');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-angular-builder');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-webdriver-manager');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-html-build');
 	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', [
		'sass',
		'watch:sass',
	]);

	grunt.registerTask('error', [
		'watch:error'
	])

	grunt.registerTask('unit', [
		'karma'
	])	
	
	grunt.registerTask('e2e', [
		'protractor'
	])
						
	grunt.registerTask('publish', [
		'release',
		'copy:publish',
		'replace:azure'
	]);
	
	grunt.registerTask('compile-sass', [
		'sass',
		'cssmin'
	])
	
	grunt.registerTask('server', [
		'sass',
		'shell',
		'express:dev'
	])
	
	grunt.registerTask('index-release', [
		'concat:azure',
		'uglify:azure',
		'htmlbuild'
	])
	
	grunt.registerTask('release', [
		//'clean',
		'index-release',
		'compile-sass',
		 'ngtemplates',
		'copy:css',
		'copy:assets',
		'concat:grid',
		'uglify:grid'
	])
};