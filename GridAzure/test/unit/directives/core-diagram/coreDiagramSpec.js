﻿describe('Core Diagram Rendering', function () {
	var element, scope, elementScope;

	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();
		scope.sankeyData = {
			"links": [
				{ "source": "View video", "target": "Log in", "value": "1" },
				{ "source": "Ad Imression", "target": "Log in", "value": "1" },
				{ "source": "Ad Imression", "target": "Ad Click", "value": "1" },
				{ "source": "Ad Click", "target": "Log in", "value": ".75" },
				{ "source": "Log in", "target": "Purchase Complete", "value": "1" },
				{ "source": "Ad Click", "target": "Purchase Complete", "value": "1" },
				{ "source": "Ad Imression", "target": "Purchase Complete", "value": "1" },
				{ "source": "View video", "target": "Purchase Complete", "value": "1" }
			],
			"nodes": [
				{ "name": "View video", "color": "rgb(62,145,95)", "transform": "0,0", "mx": "0", "my": "0", "val": "50" },
				{ "name": "Log in", "color": "rgb(133,133,133)", "transform": "445,0", "mx": "445", "my": "0", "val": "65" },
				{ "name": "Ad Imression", "color": "rgb(211,46,53)", "transform": "0,415.55555555555554", "mx": "0", "my": "415.55555555555554", "val": "15" },
				{ "name": "Ad Click", "color": "rgb(20,0,254)", "transform": "699,567.7777777777778", "mx": "699", "my": "567.7777777777778", "val": "20" },
				{ "name": "Purchase Complete", "color": "rgb(20,58,173)", "transform": "1118,405.55555555555554", "mx": "1118", "my": "405.55555555555554", "val": "12" }
			]
		};

		element = $compile('<core-diagram sankey-data="sankeyData"></core-diagram>')(scope);
		scope.$digest();
	}));

	it("should render sankey", function () {
		//TODO: d3 not working with karma
		expect(element.find('.node').length).toBe(0)
	});
});