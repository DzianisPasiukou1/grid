// Karma configuration
// Generated on Tue Aug 04 2015 19:19:27 GMT+0300 (Belarus Standard Time)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/angular-i18n/angular-locale_en-us.js',
			'bower_components/angular-ui-grid/ui-grid.min.js',
			'bower_components/flip/dist/jquery.flip.min.js',
			'bower_components/jquery-date-range-picker/moment.min.js',
			'bower_components/jquery-date-range-picker/jquery.daterangepicker.js',
			'bower_components/ng-grid/ng-grid-2.0.14.min.js',
			'bower_components/d3/d3.min.js',
			'bower_components/select2/select2.min.js',
			'bower_components/angular-ui-select2/src/select2.js',
			'bower_components/angular-translate/angular-translate.min.js',
			'bower_components/underscore/underscore-min.js',
			'bower_components/bootstrap-daterangepicker/daterangepicker.js',
			'bower_components/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
			'bower_components/bootstrap/dist/js/bootstrap.js',
			'app/**/*.js',
			'azure-app/**/*.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'test/**/*.js',
			'app/templates/**/*.html'
		],

		// list of files to exclude
		exclude: [
			'app/custom-grid-with-sankey.js',
			'app/custom-grid-with-sankey.min.js',
			'app/custom-grid.js',
			'app/custom-grid.min.js',
		],

		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-ng-html2js-preprocessor'
		],



		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'app/templates/**/*.html': ['ng-html2js']
		},

		ngHtml2JsPreprocessor: {
			//stripPrefix: 'app/',
			moduleName: 'gridTaskApp'
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 8080,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	})
}
