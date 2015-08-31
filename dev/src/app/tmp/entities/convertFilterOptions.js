function convertFilterOptions(options) {
	var convertOpt = { filterText: '' };

	for (var i = 0; i < options.length; i++) {

		if (options[i].filter) {
			convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
		}
	}
	return convertOpt;
}