describe('Core Diagram Rendering', function () {
	var element, scope, elementScope;

	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($compile, $rootScope, $timeout) {
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
				{
					"name": "View video", "color": "rgb(62,145,95)", "transform": "0,0", "mx": "0", "my": "0", "val": "50", "mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": '657H836', "adId": '904743' }, { "campaignId": '657H836', "adId": '904743' }]
					}
				},
				{
					"name": "Log in", "color": "rgb(133,133,133)", "transform": "445,0", "mx": "445", "my": "0", "val": "65", "mouseover": {
						"type": { "isMedium": "true" },
						"header": "Event: Log In",
						"data": {
							"topSegments": ['Moms_2014', 'Affiluent_buyers', 'Auto-Inteders', 'Star Wars', 'Female 25-34'],
							"topCampaings": ['C1_Dx_1', 'F2_DX_2', 'Gofundme DX3', 'Test campaign', 'Random Campaign']
						}
					}
				},
				{
					"name": "Ad Imression", "color": "rgb(211,46,53)", "transform": "0,415.55555555555554", "mx": "0", "my": "415.55555555555554", "val": "15", "mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": '657H836', "adId": '904743' }, { "campaignId": '657H836', "adId": '904743' }]
					}
				},
				{
					"name": "Ad Click", "color": "rgb(20,0,254)", "transform": "699,567.7777777777778", "mx": "699", "my": "567.7777777777778", "val": "20", "mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": '657H836', "adId": '904743' }, { "campaignId": '657H836', "adId": '904743' }]
					}
				},
				{
					"name": "Purchase Complete", "color": "rgb(20,58,173)", "transform": "1118,405.55555555555554", "mx": "1118", "my": "405.55555555555554", "val": "12", "mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": '657H836', "adId": '904743' }, { "campaignId": '657H836', "adId": '904743' }]
					}
				}
			]
		};

		element = $compile('<div core-diagram="{}" sankey-data="sankeyData"></div>')(scope);
		//TODO: sourceLinks on sankey undefined - exception
		//scope.$digest();
		//$timeout.flush();
	}));

	it("should render sankey", function () {
		//TODO: d3 not working with karma
	});
});