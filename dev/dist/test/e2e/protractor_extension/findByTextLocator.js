/**
 * Description
 * @method findByText
 * @return matches
 */
var findByText = function () {
	var using = arguments[0] || document;
	var text = arguments[1];
	var matches = [];
	/**
	 * Description
	 * @method addMatchingLeaves
	 * @param {} element
	 * @return 
	 */
	function addMatchingLeaves(element) {
		if (element.children.length === 0 && element.textContent.match(text)) {
			matches.push(element);
		}
		for (var i = 0; i < element.children.length; ++i) {
			addMatchingLeaves(element.children[i]);
		}
	}
	addMatchingLeaves(using);
	return matches;
};

by.addLocator('text', findByText);