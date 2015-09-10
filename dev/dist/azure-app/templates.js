angular.module('azureApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/dist/azure-app/templates/download.html',
    "<div class=\"navigation\">\r" +
    "\n" +
    "\t<div class=\"link-container\">\r" +
    "\n" +
    "\t\t<a class=\"download-app\" target=\"_self\" href=\"/release/grid.js\" download=\"grid.js\">Download app js</a>\r" +
    "\n" +
    "\t\t<hr />\r" +
    "\n" +
    "\t\t<a class=\"download-app-min\" target=\"_self\" href=\"/release/grid.min.js\" download=\"grid.min.js\">Download min app js</a>\r" +
    "\n" +
    "\t\t<hr />\r" +
    "\n" +
    "\t\t<a class=\"download-style\" target=\"_self\" href=\"/release/styles/styles.css\" download=\"styles.css\">Download styles</a>\r" +
    "\n" +
    "\t\t<hr />\r" +
    "\n" +
    "\t\t<a class=\"download-style-min\" target=\"_self\" href=\"/release/styles/styles.min.css\" download=\"styles.min.css\">Download min styles</a>\r" +
    "\n" +
    "\t\t<hr />\r" +
    "\n" +
    "\t\t<!--<a class=\"download-style-min\" target=\"_self\" href=\"/sources/sources.zip\" download=\"sources.zip\">Download as archive</a>\r" +
    "\n" +
    "\t\t<hr />-->\r" +
    "\n" +
    "\t\t<a class=\"download-style-min\" target=\"_self\" href=\"/dist/data/json.zip\" download=\"json.zip\">Download json files</a>\r" +
    "\n" +
    "\t\t<hr />\r" +
    "\n" +
    "\t\t<div class=\"link-container__update\">Last update on Fri, 21 Aug 2015 19:07:30 GMT</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-d3.html',
    "<div kx-nav-bar></div>\r" +
    "\n" +
    "<div class=\"sankey\">\r" +
    "\n" +
    "\t<div ext-page-sankey content-options=\"vm.contentOptions\" cards-options=\"vm.cardsOpt\" sankey-data=\"vm.sankeyData\" histogram-data=\"vm.histogramData\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-standart-one.html',
    "<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "<ext-page-content grid-data=\"vm.data\" content-options=\"vm.contentOptions\" grid=\"vm.grid\" grid-options=\"vm.gridOptions\" ui-grid-options=\"vm.uiGridOptions\"></ext-page-content>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-standart-two.html',
    "<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "<ext-page-content grid-data=\"vm.data\" content-options=\"vm.contentOptions\" grid=\"vm.grid\" grid-options=\"vm.gridOptions\" ui-grid-options=\"vm.uiGridOptions\"></ext-page-content>\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-testing.html',
    "<div class=\"grid-testing\">\r" +
    "\n" +
    "\t<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "\t<textarea class=\"my-textarea\" ng-model=\"vm.scope.content\" ng-change=\"vm.scope.textChange()\" hotkey-formatter=\"vm.scope.refreshContent\"></textarea>\r" +
    "\n" +
    "\t<div class=\"validators-group\">\r" +
    "\n" +
    "\t\t<label class=\"success\" ng-show=\"vm.scope.isValid\">Valid data</label>\r" +
    "\n" +
    "\t\t<label class=\"failed\" ng-show=\"!vm.scope.isValid\">Invalid data</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"generate-btn\" ng-click=\"compile()\">Compile</button>\r" +
    "\n" +
    "\t<ext-page-content grid-data=\"vm.scope.data\" content-options=\"vm.scope.contentOptions\" grid=\"vm.scope.grid\" grid-options=\"vm.scope.gridOptions\" ui-grid-options=\"vm.scope.uiGridOptions\"></ext-page-content>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-with-cards.html',
    "<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "<ext-page-content-cards grid-data=\"vm.data\" content-options=\"vm.contentOptions\" grid=\"vm.grid\" ui-grid-options=\"vm.uiGridOptions\"></ext-page-content-cards>\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-with-details-template.html',
    "<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "<ext-page-content grid-data=\"vm.data\" content-options=\"vm.contentOptions\" grid=\"vm.grid\" grid-options=\"vm.gridOptions\" ui-grid-options=\"vm.uiGridOptions\"></ext-page-content>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-with-loading.html',
    "<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "<ext-page-content grid-data=\"vm.data\" content-options=\"vm.contentOptions\" grid=\"vm.grid\" grid-options=\"vm.gridOptions\" ui-grid-options=\"vm.uiGridOptions\"></ext-page-content>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-with-menu.html',
    "<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "<ext-page-content grid-data=\"vm.data\" content-options=\"vm.contentOptions\" grid=\"vm.grid\" grid-options=\"vm.gridOptions\" ui-grid-options=\"vm.uiGridOptions\"></ext-page-content>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/grids/grid-with-upload.html',
    "<button class=\"metro-btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "<ext-page-content grid-data=\"vm.data\" content-options=\"vm.contentOptions\" grid=\"vm.grid\" grid-options=\"vm.gridOptions\" ui-grid-options=\"vm.uiGridOptions\"></ext-page-content>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/dist/azure-app/templates/navigation.html',
    "<div class=\"navigation\">\r" +
    "\n" +
    "\t<h1>UI Reference Examples</h1>\r" +
    "\n" +
    "\t<div class=\"metro-btn-container\">\r" +
    "\n" +
    "\t\t<button class=\"metro-btn\" onclick=\"location.href = '/download'\">Download now</button>\r" +
    "\n" +
    "\t\t<button class=\"metro-btn\" onclick=\"location.href = 'https://github.com/DzianisPasiukou1/grid/tree/publish-dev'\">Github</button>\r" +
    "\n" +
    "\t\t<button class=\"metro-btn\" onclick=\"location.href = '/docs'\">Documentation</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<h2>Grids</h2>\r" +
    "\n" +
    "\t<ul class=\"page\">\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/standartOne\">Grid standart one</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/standartTwo\">Grid standart two</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/withDetailsTemplate\">Grid with details template</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/withUpload\">Grid with upload</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/withLoading\">Grid with loading</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/testing\">Grid for test</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/withMenu\">Grid with menu</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li class=\"page__element\">\r" +
    "\n" +
    "\t\t\t<a href=\"/withCards\">Grid with cards</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<h2>Pages</h2>\r" +
    "\n" +
    "\t<ul class=\"page\">\r" +
    "\n" +
    "\t\t<li class=\"page__element\"><a href=\"/withDiagrams\">Sankey Diagram Page</a></li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>"
  );

}]);
