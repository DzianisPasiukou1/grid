/* global moment */
(function () {
	'use strict';

	angular
		.module('ext.sankey.pageSankey')
		.constant('CONTENT', {
			eventType: {
				options: {
					actions: [
						{ label: 'Simple event' },
						{ label: 'Medium event' }],
					selected: { label: 'Simple event' }
				},
				selectOpt: {}
			},
			segments: {
				options: {
					actions: [{ label: 'People' }, { label: 'Trees' }, { label: 'Nodes' }, { label: 'Graphs' }, { label: 'Credentials' }],
				},
				selectOpt: {
					inheritClass: true,
					includeSelectAllOption: true
				}
			},
			campaign: {
				options: {
					actions: [{ label: 'AIX' }, { label: 'UI Campaign' }, { label: 'Design' }, { label: 'Modes' }, { label: 'KJ Entertainment' }],
				},
				selectOpt: {
					inheritClass: true,
					includeSelectAllOption: true
				}
			},
			sankeyFilters: {
				dateRange: {
					start: moment(new Date(new Date().setDate(new Date().getDate() - 7))),
					end: moment(new Date())
				},
			},
			enableDebugging: true,
			startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
			endDate: new Date(),
			dateRange: Math.abs(new Date().getTime() - new Date(new Date().setDate(new Date().getDate() - 1)).getTime()),
			datePickerConfig: {
				singleMonth: true,
				showShortcuts: false,
				showTopbar: false
			},
			sankeyData: {
				"links": [
					{ "source": "View video", "target": "Log in", "value": "1" },
					{ "source": "View video", "target": "Add to Cart", "value": "1.5" },
					{ "source": "Ad Imression", "target": "Log in", "value": "1" },
					{ "source": "Ad Imression", "target": "Ad Click", "value": "1" },
					{ "source": "Ad Click", "target": "Log in", "value": ".75" },
					{ "source": "Log in", "target": "Purchase Complete", "value": "1" },
					{ "source": "Add to Cart", "target": "Purchase Complete", "value": "1" },
					{ "source": "Add to Cart", "target": "Carting", "value": 1 },
					{ "source": "Carting", "target": "Init", "value": 0.5 },
					{ "source": "Carting", "target": "Log out", "value": 0.5 },
					{ "source": "Log out", "target": "Log in", "value": 1 },
					{ "source": "Log in", "target": "Information", "value": 1 },
					{ "source": "Information", "target": "Examination", "value": 1 }
				],
				"nodes": [
					{
						"name": "View video",
						"color": "rgb(62,145,95)",
						"transform": "0,0",
						"mx": "0",
						"my": "0",
						"val": "50",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Log in",
						"color": "rgb(133,133,133)",
						"transform": "445,0",
						"mx": "445",
						"my": "0",
						"val": "65",
						"mouseover": {
							"type": { "isMedium": "true" },
							"header": "Event: Log In",
							"data": {
								"topSegments": ["Moms_2014", "Affiluent_buyers", "Auto-Inteders", "Star Wars", "Female 25 -34"],
								"topCampaings": ["C1_Dx_1", "F2_DX_2", "Gofundme DX3", "Test campaign", "Random Campaign"]
							}
						}
					},
					{
						"name": "Ad Imression",
						"color": "rgb(211,46,53)",
						"transform": "0,415.55555555555554",
						"mx": "0",
						"my": "415.55555555555554",
						"val": "15",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Ad Click",
						"color": "rgb(20,0,254)",
						"transform": "699,567.7777777777778",
						"mx": "699",
						"my": "567.7777777777778",
						"val": "20",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Add to Cart",
						"color": "rgb(157,226,141)",
						"transform": "827,333.18181818181824",
						"mx": "827",
						"my": "333.18181818181824",
						"val": "30",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Purchase Complete",
						"color": "rgb(20,58,173)",
						"transform": "1118,405.55555555555554",
						"mx": "1118",
						"my": "405.55555555555554",
						"val": "12",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Carting",
						"color": "rgb(123,20,56)",
						"transform": "1172,3.6327926195491926",
						"mx": "1172",
						"my": "3.6327926195491926",
						"val": "55",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Init",
						"color": "rgb(0,23,76)",
						"transform": "1390,82.6327926195492",
						"mx": "1390",
						"my": "82.6327926195492",
						"val": "65",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Log out",
						"color": "rgb(78,66,12)",
						"transform": "756,0",
						"mx": "756",
						"my": "0",
						"val": "23",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Information",
						"color": "rgb(66,66,66)",
						"transform": "1060,162.6327926195492",
						"mx": "1060",
						"my": "162.6327926195492",
						"val": "33",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					},
					{
						"name": "Examination",
						"color": "rgb(12,51,128)",
						"transform": "1455,390.63279261954915",
						"mx": "1455",
						"my": "390.63279261954915",
						"val": "76",
						"mouseover": {
							"type": { "isSimple": "true" },
							"header": "Video: ID: 124856",
							"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
						}
					}
				]
			},
			histogramData: [
				{ "name": "1", "value": 100000 },
				{ "name": "2", "value": 150000 },
				{ "name": "3", "value": 170000 },
				{ "name": "4", "value": 300000 },
				{ "name": "5", "value": 350000 },
				{ "name": "6", "value": 400000 },
				{ "name": "7", "value": 500000 },
				{ "name": "8", "value": 550000 },
				{ "name": "9", "value": 600000 },
				{ "name": "10", "value": 700000 }
			],
			cards: {
				views: {
					label: 'Total Touchpoints',
					count: 1910000,
					graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
						{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
						{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
						{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
						{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
				},
				conversion: {
					label: 'Reached Goal',
					count: 2010,
					graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
						{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
						{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
						{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
						{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
				},
				spend: {
					label: 'Potential Reach',
					count: 2150,
					graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
						{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
						{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
						{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
						{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
				}
			},
			enableCounter: true,
			margin: 525,
			debugCard: {
				id: 'debug',
				text: 'Debug',
				templateUrl: 'src/app/ext.sankey.modules/ext-page-sankey/templates/debug.html'
			}
		});
} ());