(function () {
	'use strict';

	angular
		.module('ext.sankey.navbar')
		.factory('NavigationTree', NavigationTree);

	NavigationTree.$inject = [];

	/**
	 * Description
	 * @method NavigationTree
	 * @return ObjectExpression
	 */
	function NavigationTree() {
		return {
			menu: [],
			/**
			 * Description
			 * @method get
			 * @return AssignmentExpression
			 */
			get: function () {
				return this.menu = this.NAV_TREE;
			},
			/**
			 * Description
			 * @method generate
			 * @return menu
			 */
			generate: function () {
				var i, len, menu, node, ref, subMenu;
				menu = [];
				ref = this.NAV_TREE;
				for (i = 0, len = ref.length; i < len; i++) {
					node = ref[i];
					subMenu = this.subTree(node);
					if (!_.isEmpty(subMenu)) {
						menu.push(subMenu);
					}
				}
				return menu;
			},
			/**
			 * Description
			 * @method subTree
			 * @param {} root
			 * @return tree
			 */
			subTree: function (root) {
				var i, len, node, ref, subTree, tree;
				tree = {};
				if (root.nodes != null) {
					tree = {
						name: root.name,
						nodes: []
					};
					ref = root.nodes;
					for (i = 0, len = ref.length; i < len; i++) {
						node = ref[i];
						subTree = this.subTree(node);
						if (!_.isEmpty(subTree)) {
							tree.nodes.push(subTree);
						}
					}
					if (tree.nodes.length === 0) {
						tree = {};
					}
				} else {
					if ((root.permissions != null) && this.checkPermission(root.permissions)) {
						tree = {
							name: root.name,
							description: root.description,
							state: root.state,
							link: root.link
						};
					}
				}
				return tree;
			},
			/**
			 * Description
			 * @method checkPermission
			 * @param {} permissions
			 * @return LogicalExpression
			 */
			checkPermission: function (permissions) {
				return permissions[0] === 'none' || arrayUtils.intersects(session.allow, permissions);
			},
			NAV_TREE: [
				{
					name: 'PEOPLE',
					nodes: [
						{
							name: 'Actions',
							nodes: [
								{
									name: 'Manage Segments',
									description: 'Create segments from 1st and 3rd party data to use in audience targeting, audience insights, and personalization.',
									state: 'segments.switchPage.segmentList',
									link: '/segments/list',
									permissions: ['segments', 'segments_ro']
								}, {
									name: 'Manage Events',
									description: 'Create and manage events to get detailed insights on any user action such as clicks, form submissions, video views and more.',
									state: 'events.list',
									link: '/events/list',
									permissions: ['events', 'events_ro']
								}, {
									name: 'Manage Funnels',
									description: 'Create funnels to track sequence of events and optimize customer funnel for higher conversions.',
									state: 'funnels.funnelList',
									link: '/funnels/list',
									permissions: ['funnels', 'funnels_ro']
								}
							]
						}, {
							name: 'Insights',
							nodes: [
								{
									name: 'Segment Insights',
									description: 'View segment specific statistics and insights.',
									state: 'audience.switchPage.discovery',
									link: '/audience/discovery',
									permissions: ['segments', 'segments_ro']
								}, {
									name: 'Segment Overlaps',
									description: 'View population overlap for all your segments.',
									state: 'audience.overlaps',
									link: '/audience/overlaps',
									permissions: ['segment_overlaps_report']
								}, {
									name: 'Attributes',
									description: 'View trends for attribute values.',
									state: 'audience.attributesReport',
									link: '/audience/attributes-report',
									permissions: ['attributes_report']
								}, {
									name: 'Data Providers',
									description: 'Compare data provider population with Krux’s  people-data universe.',
									state: 'audience.dataprovidersReport',
									link: '/audience/dataproviders-report',
									permissions: ['dataproviders_report']
								}, {
									name: 'Reach Opportunities',
									description: 'Reach and convert people who are similar to your most valuable customers.',
									state: 'opportunities.base2ndParty.chart',
									link: '/opportunities/secondPartyChart/',
									permissions: ['opportunities', 'opportunities_ro']
								}, {
									name: 'Audience Profile',
									description: 'Audience Profile Report Organization Level.',
									state: 'audience.profileReportOrgLevel',
									link: '/audience/audience_profile/',
									permissions: []
								}
							]
						}, {
							name: 'Analytics',
							nodes: [
								{
									name: 'Audience',
									description: ' ',
									state: 'audience.audienceAnalytics',
									link: '/audience/audience-analytics',
									permissions: ['audience_analytics']
								}, {
									name: 'Engagement',
									description: ' ',
									state: 'audience.engagement',
									link: '/audience/engagement',
									permissions: ['user_engagement_distribution']
								}, {
									name: 'Loyalty',
									description: ' ',
									state: 'audience.loyalty',
									link: '/audience/loyalty',
									permissions: ['loyalty_report']
								}, {
									name: 'Social Sharing',
									description: '',
									state: 'audience.socialSharing',
									link: '/audience/socialSharing',
									permissions: []
								}
							]
						}
					]
				}, {
					name: 'MARKETING',
					nodes: [
						{
							name: 'Performance',
							nodes: [
								{
									name: 'Segments',
									description: 'View segment specific performance details.',
									state: 'marketing.segmentPerformance',
									link: '/marketing/performance/?activeTab=audienceSegments',
									permissions: ['marketing_performance']
								}, {
									name: 'Campaigns',
									description: 'View campaign specific performance details.',
									state: 'marketing.campaignPerformance',
									link: '/marketing/performance/?activeTab=campaigns',
									permissions: ['marketing_performance']
								}, {
									name: 'Sites',
									description: 'View site specific performance details.',
									state: 'marketing.campaignPerformance',
									link: '/marketing/performance/?activeTab=sites',
									permissions: ['marketing_performance']
								}, {
									name: 'Reach and Overlap',
									description: 'View reach overlap across channels for campaigns or segments to increase precision.',
									state: 'marketing.reachOverlap',
									link: '/marketing/reach_overlap',
									permissions: ['reach_and_overlap']
								}
							]
						}, {
							name: 'Real Time Bidding',
							nodes: [
								{
									name: 'Manage Campaigns',
									description: '',
									state: 'rtb.campaign.list',
									link: '/rtb/campaign',
									permissions: ['ic_extend', 'ic_extend_ro']
								}, {
									name: 'Manage Creatives',
									description: '',
									state: 'rtb.creative.list',
									link: '/rtb/creative',
									permissions: ['ic_extend', 'ic_extend_ro']
								}
							]
						}, {
							name: 'Customer Journey',
							nodes: [
								{
									name: 'Manage Campaign Attribution',
									description: '',
									state: 'marketing.campaignAttribution',
									link: '/marketing/campaign_attribution',
									permissions: ['manage_goals']
								}, {
									name: 'Attribution Report',
									description: '',
									state: 'marketing.attribution',
									link: '/marketing/attribution',
									permissions: ['manage_goals', 'attribution_report']
								}
							]
						}, {
							name: 'Global Frequency',
							nodes: [
								{
									name: 'Manage Frequency',
									description: 'Control and fine-tune frequency across all execution systems.',
									state: 'marketing.globalFrequencyManagement',
									link: '/marketing/global_frequency_management',
									permissions: ['global_frequency_management']
								}, {
									name: 'Frequency Distribution',
									description: 'Monitor under-performing and wasteful campaign frequency.',
									state: 'marketing.frequencyDistributionReport',
									link: '/frequency-reports',
									permissions: ['frequency_reports']
								}
							]
						}
					]
				}, {
					name: 'LINK',
					nodes: [
						{
							name: 'Buyer',
							nodes: [
								{
									name: 'Search',
									description: '',
									state: 'buyersConsole.search',
									link: '/buyersConsole/search',
									permissions: ['search_audience_segments']
								}, {
									name: 'Manage Orders',
									description: '',
									state: 'order.manageOrders',
									link: '/order/manageOrders',
									permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
								}, {
									name: 'Cart',
									description: '',
									state: 'order.cart',
									link: '/order/cart',
									permissions: ['purchase_segments_manage_orders', 'purchase_segments_manage_orders_ro', 'search_audience_segments']
								}, {
									name: 'Billing',
									description: '',
									state: 'buyersConsole.buyerBilling',
									link: '/buyersConsole/buyer_billing',
									permissions: ['purchase_segments_manage_orders']
								}
							]
						}, {
							name: 'Seller',
							nodes: [
								{
									name: 'Manage LinK',
									description: '',
									state: 'interchange.brokerage.list',
									link: '/interchange/link',
									permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
								}, {
									name: 'Manage Orders',
									description: '',
									state: 'interchange.brokerage.orders.list',
									link: '/interchange/link/orders',
									permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
								}, {
									name: 'Billing',
									description: '',
									state: 'buyersConsole.sellerBilling',
									link: '/buyersConsole/seller_billing',
									permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
								}
							]
						}
					]
				}, {
					name: 'INTERCHANGE',
					nodes: [
						{
							name: 'Performance',
							nodes: [
								{
									name: 'Yield Analytics',
									description: '',
									state: 'yieldAnalytics.aggregate',
									link: '/interchange/yield_analytics',
									permissions: ['yield_analytics', 'yield_analytics_ro']
								}
							]
						}, {
							name: 'Partner Management',
							nodes: [
								{
									name: 'Manage Accounts',
									description: '',
									state: 'partnerEnablementFramework.list',
									link: '/partner_management',
									permissions: ['manage_partners']
								}
							]
						}
					]
				}, {
					name: 'SUPERTAG',
					nodes: [
						{
							name: 'Actions',
							nodes: [
								{
									name: 'List Tags',
									description: '',
									state: 'supertag.listTags',
									link: '/supertag/list_tags',
									permissions: ['supertag_full', 'supertag_readonly']
								}, {
									name: 'Pending Approval',
									description: '',
									state: 'supertag.pendingApproval.list',
									link: '/supertag/pendingApproval',
									permissions: ['supertag_approve']
								}, {
									name: 'Library Tags',
									description: '',
									state: 'supertag.libraryTags',
									link: '/supertag/library_tags',
									permissions: []
								}, {
									name: 'Rule manager',
									description: 'Manage supertag named rules',
									state: 'supertag.tagRules',
									link: '/supertag/tag_rules',
									permissions: ['supertag_full']
								}
							]
						}, {
							name: 'Reports',
							nodes: [
								{
									name: 'Tag Summary',
									description: '',
									state: 'supertag.reports.list',
									link: '/supertag/reports',
									permissions: ['supertag_full', 'supertag_readonly']
								}, {
									name: 'Tag Inspector',
									description: '',
									state: 'supertag.tagInspectorCode',
									link: '/supertag/tag_inspector?auto_inspect',
									permissions: ['supertag_full', 'supertag_readonly']
								}
							]
						}
					]
				}, {
					name: 'DATA SENTRY',
					nodes: [
						{
							name: 'Dashboard',
							description: '',
							state: 'dataSentry.globalDashboard',
							link: '/dataSentry/globalDashboard',
							permissions: ['data_sentry']
						}
					]
				}, {
					name: 'TOOLS',
					nodes: [
						{
							name: 'Settings',
							nodes: [
								{
									name: 'Manage Users',
									description: '',
									state: 'account.usersList',
									link: '/account/users',
									permissions: ['manage_users']
								}, {
									name: 'Manage Sites',
									description: '',
									state: 'account.sites',
									link: '/account/sites',
									permissions: ['manage_sites']
								}, {
									name: 'Manage Settings',
									description: '',
									state: 'account.settings',
									link: '/account/settings',
									permissions: ['none']
								}
							]
						}, {
							name: 'Internal',
							nodes: [
								{
									name: 'Create Organization',
									description: '',
									state: 'organization.create',
									link: '/organization/create',
									permissions: []
								}, {
									name: 'Organization Settings',
									description: '',
									state: 'organization.edit',
									link: '/organization/edit/',
									permissions: []
								}, {
									name: 'Internal Dashboard',
									description: '',
									state: 'internal.dashboard',
									link: '/internal/dashboard',
									permissions: []
								}, {
									name: 'Traffic Trends',
									description: '',
									state: 'internal.traffic_trends',
									link: '/internal/traffic_trends',
									permissions: []
								}, {
									name: 'Pipeline Dashboard',
									description: '',
									state: 'dataPipeline',
									link: '/pipeline',
									permissions: []
								}
							]
						}, {
							name: 'Platform Commands',
							nodes: [
								{
									name: 'Generate Krux Standard Segments',
									description: '',
									state: 'platform.generate',
									link: '/platform/generate',
									permissions: []
								}
							]
						}
					]
				}
			]
		};
	};
} ());