angular.module('gridTaskApp')
.config(['$translateProvider', 'LOCATIONS_RU', 'LOCATIONS_EN', function ($translateProvider, LOCATIONS_RU, LOCATIONS_EN) {
	$translateProvider.translations('en', {
		'Selected Users': 'Selected Users',
		'usersInteract': 'Users who have interacted with at least ',
		'filterList': 'Filter list',
		'showRecords': 'Show records',
		'back': 'Back',
		'save': 'Save',
		'filter': 'Filter',
		'history': 'History',
		'oldValue': 'Old value',
		'newValue': 'New value',
		'dateChange': 'Date change',
		'historyEmpty': 'History is empty',
		'editEntity': 'Edit entity',
		'close': 'Close',
		'topSegments': 'Top Segments',
		'topCampaigns': 'Top campaigns',
		'records': 'records',
		'choose': 'Choose',
		'upload': 'Upload'
	});

	$translateProvider.translations('ru', {
		'Selected Users': 'Выбранные пользователи',
		'filterList': 'Список фильтров',
		'showRecords': 'Показать записи',
		'back': 'Назад',
		'save': 'Сохранить',
		'filter': 'Фильтр',
		'history': 'История',
		'oldValue': 'Старое значение',
		'newValue': 'Новое значение',
		'dateChange': 'Дата изменения',
		'historyEmpty': 'История пуста',
		'editEntity': 'Изменить сущность',
		'close': 'Закрыть',
		'topSegments': 'Лучшие сегменты',
		'topCampaigns': 'Лучшие кампании',
		'records': 'записей',
		'choose': 'Выбрать',
		'upload': 'Загрузить'
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