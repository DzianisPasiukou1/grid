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
		}
	});

	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.registerTask('default', [
		 'ngtemplates'
	]);
};