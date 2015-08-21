function columnsCompare(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length) {
		return false;
	}

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i].field != arr2[i].field) {
			return false;
		}
	}

	return true;
}