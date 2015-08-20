module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myapp: {
				options: {
					base: "",
					module: "gridTaskApp",
				},
				src: "app/templates/**/*.html",
				dest: "app/templates.js"
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', [
		 'ngtemplates'
	]);

	grunt.registerTask('test', [
		'karma'
	])
};