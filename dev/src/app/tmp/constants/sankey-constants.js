angular.module('gridTaskApp')
	.constant('SANKEY', {
		data: {
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
		}
	});