angular.module('gridTaskApp')
.config(['$translateProvider', 'LOCATIONS_RU', 'LOCATIONS_EN', function ($translateProvider, LOCATIONS_RU, LOCATIONS_EN) {
	$translateProvider.translations('en', {
		'Selected Users': 'Selected Users',
		'usersInteract': 'Users who have interacted with at least '
	});

	$translateProvider.translations('ru', {
		'Selected Users': 'Выбранные пользователи'
	});


	appendLocations('en', LOCATIONS_EN);
	appendLocations('ru', LOCATIONS_RU);

	function appendLocations(language, dictionary) {
		angular.forEach(dictionary, function (item, key) {
			$translateProvider.translations(language)[key] = item;
		});
	};

	$translateProvider.preferredLanguage('en');
}]);