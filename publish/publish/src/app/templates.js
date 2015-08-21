angular.module('gridTaskApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/src/app/templates/directive-templates/cards.html',
    "<div class=\"cards-group\" ng-style=\"groupStyle\">\r" +
    "\n" +
    "\t<div class=\"my-card\" id=\"{{contentOptions.debugCard.id}}\" ng-if=\"contentOptions.enableDebugging\" ng-style=\"contentOptions.debugCard.style\">\r" +
    "\n" +
    "\t\t<div class=\"front\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-info\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{contentOptions.debugCard.text | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<span>{{contentOptions.debugCard.body | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"back\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-circle-left\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{contentOptions.debugCard.text | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<div ng-if=\"contentOptions.debugCard.templateUrl\" ng-include=\"contentOptions.debugCard.templateUrl\">\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<div ng-if=\"!contentOptions.debugCard.templateUrl\" gr-template=\"contentOptions.debugCard.template\" gr-name=\"debugTemplate\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"my-card\" ng-repeat=\"(id, card) in cards\" id=\"{{id}}\" ng-style=\"card.style\">\r" +
    "\n" +
    "\t\t<div class=\"front\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-info\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{card.label | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div ng-if=\"card.counter\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-card__body\" ng-init=\"card.count = card.counter.calculate(startDate, endDate) || card.count\">\r" +
    "\n" +
    "\t\t\t\t\t<span number-format=\"card.count\"></span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"back\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-circle-left\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{card.label | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-card__body__graphs\" graphs=\"card.graphs\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/chart-segment.html',
    "<div class=\"chart-segment\">\r" +
    "\n" +
    "\t<div class=\"chart-segment__list\">\r" +
    "\n" +
    "\t\t<div class=\"chart-segment__list__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"chart-segment__list__header__text\">{{panel.header.text | translate}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"chart-segment__list__body\">\r" +
    "\n" +
    "\t\t\t<div ng-repeat=\"user in selectedUsers\" class=\"chart-segment__list__body__user\" ng-class=\"{'even' : $even, 'odd': $odd}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"chart-segment__list__body__user__icon icon-close\" ng-click=\"deleteUser(user, $index)\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"chart-segment__list__body__user__text\">{{::'usersInteract' | translate}}{{user.touchpoints}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"chart-segment__btn\">\r" +
    "\n" +
    "\t\t<button class=\"kx-btn\">{{::panel.btn.text | translate}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/checkbox-select.html',
    "<div class=\"checkbox-select\" any-other-click=\"isShow=false\">\r" +
    "\n" +
    "\t<div class=\"checkbox-select__check\">\r" +
    "\n" +
    "\t\t<label class=\"checkbox-select__input-control\">\r" +
    "\n" +
    "\t\t\t<input type=\"checkbox\" ng-model=\"options.selected.check\" ng-change=\"checked(options.selected.check)\" />\r" +
    "\n" +
    "\t\t\t<span class=\"checkbox-select__input-control__span\" ng-class=\"{'marked':options.selected.isMarked || options.selected.isNotMarked}\"></span>\r" +
    "\n" +
    "\t\t</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button type=\"button\" class=\"checkbox-select__btn\" ng-class=\"{'opened' : isShow}\" ng-click=\"toggle()\">\r" +
    "\n" +
    "\t\t<span class=\"checkbox-select__expand\" ng-class=\"{'icon-menu-down': !isShow, 'icon-menu-up': isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<ul class=\"checkbox-select__list\" ng-show=\"isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in options.actions\" ng-click=\"select(action)\"><a>{{action.label | translate}}</a></li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/content-options-cards.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div custom-datepicker=\"options.datepickerOptions\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__filter\">\r" +
    "\n" +
    "\t\t<split-button class=\"options__show\" actions=\"options.searchOptions\" selected=\"options.show\" search=\"options.searchValue\"></split-button>\r" +
    "\n" +
    "\t\t<search class=\"options__search\" search-value=\"options.searchValue\"></search>\r" +
    "\n" +
    "\t\t<div class=\"options__filt\" filter=\"options.filterOptions\" on-filtrate=\"options.filtrate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/content-options-d3.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div class=\"input-prepend\">\r" +
    "\n" +
    "\t\t\t<div kx-date-range=\"kx-date-range\" time-range=\"past\" name=\"dateRange\" ng-model=\"filters.dateRange\" ng-disabled=\"loading\" ng-change=\"filters.onDateRangeChange()\" class=\"date-range-picker\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__select\">\r" +
    "\n" +
    "\t\t<select class=\"options__event\" ui-select2=\"options.eventType.selectOpt\" ng-model=\"options.eventOpt.options.selected\" data-placeholder=\"Choose Event\" ng-required=\"true\">\r" +
    "\n" +
    "\t\t\t<option value=\"\"></option>\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.eventType.options.actions\">{{action.label|translate}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t\t<select class=\"options__segments kx-multiselect\" kx-multiselect=\"options.segments.selectOpt\" ng-change=\"options.segments.options.onChange()\" ng-model=\"options.segments.options.selected\" multiple=\"true\" data-placeholder=\"{{::'Choose Segments' | translate}}\">\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.segments.options.actions\">{{action.label|translate}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t\t<select class=\"options__campaign kx-multiselect\" kx-multiselect=\"options.campaign.selectOpt\" ng-change=\"options.campaign.options.onChange()\" ng-model=\"options.campaign.options.selected\" data-placeholder=\"{{::'Choose Campaigns' | translate}}\" multiple=\"true\">\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.campaign.options.actions\">{{action.label|translate}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"kx-btn\" ng-click=\"options.refresh()\">Update</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/content-options.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div checkbox-select=\"options.checks.options\" class=\"options__check\"></div>\r" +
    "\n" +
    "\t\t<button class=\"options__refresh\" ng-click=\"options.refresh()\">Refresh</button>\r" +
    "\n" +
    "\t\t<div dropdown=\"options.mores.options\" class=\"options__more\"></div>\r" +
    "\n" +
    "\t\t<upload class=\"options__upload\" ng-show=\"options.upload\" upload-callback=\"options.upload\"></upload>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__filter\">\r" +
    "\n" +
    "\t\t<search class=\"options__search\" search-value=\"options.searchValue\"></search>\r" +
    "\n" +
    "\t\t<split-button class=\"options__show\" actions=\"options.searchOptions\" selected=\"options.show\" search=\"options.searchValue\"></split-button>\r" +
    "\n" +
    "\t\t<div class=\"options__filt\" filter=\"options.filterOptions\" on-filtrate=\"options.filtrate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/core-diagram.html',
    "<p id=\"chart\" max-heighter>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/custom-datepicker.html',
    "<button class=\"date-btn\" ng-click=\"close()\">\r" +
    "\n" +
    "\t<span class=\"date-btn__icon glyph-calendar\"></span>\r" +
    "\n" +
    "\t<span class=\"date-btn__text\">{{opt.startDate | date}} - {{opt.endDate | date}}</span>\r" +
    "\n" +
    "\t<button class=\"date-btn__toggle\" ng-click=\"toggle()\" ng-class=\"{'opened': isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{ 'icon-menu-up': isShow, 'icon-menu-down': !isShow }\">\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<div class=\"date-btn__datepicker\" ng-if=\"isShow\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</button>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/custom-grid.html',
    "<div class=\"custom-grid\" ng-grid=\"options\">\r" +
    "\n" +
    "\t<div grid-menu class=\"custom-grid__menu\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/custom-ui-grid.html',
    "<div ui-grid=\"options\" class=\"custom-ui-grid\" ui-grid-selection ui-grid-expandable ui-grid-custom-menu>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/debug.html',
    "<div class=\"debug\">\r" +
    "\n" +
    "\t<div class=\"debug__back\">\r" +
    "\n" +
    "\t\t<button class=\"debug__back__btn\" onclick=\"location.href = '/navigation'\">{{::'back' | translate}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"debug__uploader\">\r" +
    "\n" +
    "\t\t<upload class=\"debug__uploader__btn\" upload-callback=\"contentOptions.uploadCards\" label=\"'Upload Cards'\"></upload>\r" +
    "\n" +
    "\t\t<upload class=\"debug__uploader__btn\" upload-callback=\"contentOptions.uploadSankey\" label=\"'Upload Sankey'\"></upload>\r" +
    "\n" +
    "\t\t<upload class=\"debug__uploader__btn\" upload-callback=\"contentOptions.uploadHistogram\" label=\"'Upload Histogram'\"></upload>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/dropdown.html',
    "<div class=\"my-dropdown\" any-other-click=\"isShow=false\">\r" +
    "\n" +
    "\t<button type=\"button\" class=\"my-dropdown__btn\" ng-show=\"!options.isMenu\" ng-click=\"isShow = !isShow\" ng-class=\"{'opened' : isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__text\">{{options.label | translate}}{{options.selected.label | translate}}</span>\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__expand\" ng-class=\"{'icon-menu-up': isShow, 'icon-menu-down' : !isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<button type=\"button\" class=\"my-dropdown__btn\" ng-show=\"options.isMenu\" ng-click=\"isShow = !isShow\" ng-class=\"{'opened' : isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__text\">{{options.label | translate}}</span>\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__expand\" ng-class=\"{'icon-menu-up': isShow, 'icon-menu-down' : !isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<ul class=\"my-dropdown__list\" ng-show=\"isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in options.values\">\r" +
    "\n" +
    "\t\t\t<div ng-if=\"options.isCheckbox\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-dropdown__list__check\">\r" +
    "\n" +
    "\t\t\t\t\t<label class=\"my-dropdown__list__input-control\">\r" +
    "\n" +
    "\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"action.isVisible\" ng-change=\"options.onCheck(action, $index)\" id=\"{{action.label | translate}}\">\r" +
    "\n" +
    "\t\t\t\t\t\t<span class=\"my-dropdown__list__input-control__span\"></span>\r" +
    "\n" +
    "\t\t\t\t\t</label>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<label class=\"my-dropdown__list__label\" for=\"{{action.label | translate}}\">{{action.label | translate}}</label>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<a ng-click=\"select(action)\" ng-if=\"!options.isCheckbox\">{{action.label | translate}}</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<button ng-if=\"options.withSave\" ng-click=\"options.onSave()\" class=\"my-dropdown__save\">{{::'save' | translate}}</button>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/edit-entity.html',
    "<h1>{{::'editEntity' | translate}}</h1>\r" +
    "\n" +
    "<div ng-repeat=\"(key, value) in myEntity\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span><input class=\"dialog__value\" ng-model=\"myEntity[key]\" />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/filter-list.html',
    "<div class=\"filter-list\">\r" +
    "\n" +
    "\t<div class=\"filter-list__header\">\r" +
    "\n" +
    "\t\t{{::'filterList' | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"filter-list__options\">\r" +
    "\n" +
    "\t\t<div class=\"filter-list__options__value\" ng-repeat=\"opt in filterOptions\">\r" +
    "\n" +
    "\t\t\t<div class=\"filter-list__options__value__header\">\r" +
    "\n" +
    "\t\t\t\t{{opt.label | translate}}\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"filter-list__options__value__input\">\r" +
    "\n" +
    "\t\t\t\t<input type=\"text\" ng-model=\"opt.filter\" />\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div>\r" +
    "\n" +
    "\t\t<button class=\"filter-list__button\" ng-click=\"showRecords()\">{{::'showRecords' | translate}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/filter.html',
    "<div class=\"filter\" any-other-click=\"listState=false\" ng-class=\"{'filter-selected' : listState}\">\r" +
    "\n" +
    "\t<button class=\"filter__btn\" ng-click=\"filterClick()\">\r" +
    "\n" +
    "\t\t<span class=\"filter__icon icon-filter\"></span>\r" +
    "\n" +
    "\t\t<span class=\"filter__name\">{{::'filter'|translate}}</span>\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{'icon-menu-up': listState, 'icon-menu-down' : !listState}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<div ng-show=\"listState\">\r" +
    "\n" +
    "\t\t<div class=\"filter__list\" filter-list resize-on=\"listState\" parent=\".filter\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/gr-template.html',
    "<div ng-include=\"templateUrl\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/graphs.html',
    "<div ng-repeat=\"graph in graphs\" class=\"graphs\" ng-style=\"graph.style\">\r" +
    "\n" +
    "\t<div class=\"graph\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/grid-menu.html',
    "<div class=\"grid-menu\" ng-show=\"isShow\">\r" +
    "\n" +
    "\t<div class=\"grid-menu__options\" dropdown=\"options\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/histogram.html',
    "<div class=\"histogram\">\r" +
    "\n" +
    "\t<svg class=\"chart\">\r" +
    "\n" +
    "\t</svg>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div chart-segment selected-users=\"selectedUsers\"></div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/history.html',
    "<h1>{{::'history' | translate}}</h1>\r" +
    "\n" +
    "<div class=\"message\" ng-if=\"value.length == 0\">{{::'historyEmpty' | translate}}.</div>\r" +
    "\n" +
    "<div class=\"history__content\" ng-repeat=\"hist in value\">\r" +
    "\n" +
    "\t<div class=\"dialog__oldVal\">\r" +
    "\n" +
    "\t\t{{::'oldValue' | translate}}: <div ng-repeat=\"(key, value) in hist.oldObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key | translate}}</span>:<span class=\"dialog__value\">{{value | translate}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__newVal\">\r" +
    "\n" +
    "\t\t{{::'newValue' | translate}}: <div ng-repeat=\"(key, value) in hist.newObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key | translate}}</span>:<span class=\"dialog__value\">{{value | translate}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__dateChange\">\r" +
    "\n" +
    "\t\t{{::'dateChange' | translate}}: <span>{{hist.dateChange | date}}</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/kx-nav-bar.html',
    "<nav class=\"kx-nav row-fluid\">\r" +
    "\n" +
    "\t<div class=\"span12\">\r" +
    "\n" +
    "\t\t<div class=\"row-fluid\">\r" +
    "\n" +
    "\t\t\t<div class=\"kx-menu span8\" ng-controller=\"NavigationCtrl\" kx-menu>\r" +
    "\n" +
    "\t\t\t\t<a class=\"brand kx-navbar-icon\"><img class=\"main-logo\"></a>\r" +
    "\n" +
    "\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t<li ng-repeat=\"node in navigationTree\">\r" +
    "\n" +
    "\t\t\t\t\t\t<a>{{node.name}}</a>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"kx-submenu\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class=\"kx-submenu-inner\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div ng-repeat=\"subNode in node.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<h4 ng-if=\"subNode.nodes\">{{subNode.name | translate}}</h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul ng-if=\"subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<li ng-repeat=\"path in subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a>{{path.name | translate}}</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul ng-if=\"!subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a>{{subNode.name | translate}}</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"menu-util span4\">\r" +
    "\n" +
    "\t\t\t\t<ul class=\"row-fluid\">\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"span7\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"org-switcher-off\" ng-hide=\"session.other_organizations.length\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<span class=\"ng-binding\">Krux Demo Client</span>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"span5 account-util dropdown\">\r" +
    "\n" +
    "\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<i class=\"icon-user\"></i> krux-user\r" +
    "\n" +
    "\t\t\t\t\t\t\t<b class=\"caret\"></b>\r" +
    "\n" +
    "\t\t\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t\t\t<ul class=\"account-util-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"\">{{\"Account\" | translate}}</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"\">{{\"Logout\" | translate}}</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</nav>"
  );


  $templateCache.put('/src/app/templates/directive-templates/loading.html',
    "<div class=\"loading\" ng-style=\"ctrl.element\">\r" +
    "\n" +
    "\t<div class=\"loading-disabled\" ng-style=\"ctrl.disabled\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"spinner\">\r" +
    "\n" +
    "\t\t<div class=\"spinner-container container1\">\r" +
    "\n" +
    "\t\t\t<div class=\"circle1\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle2\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle3\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle4\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"spinner-container container2\">\r" +
    "\n" +
    "\t\t\t<div class=\"circle1\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle2\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle3\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle4\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"spinner-container container3\">\r" +
    "\n" +
    "\t\t\t<div class=\"circle1\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle2\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle3\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle4\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/modal.html',
    "<div class=\"modal\" ng-class=\"modal\" ng-if=\"isModal\">\r" +
    "\n" +
    "\t<div class=\"fade\" ng-style=\"fade\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog\">\r" +
    "\n" +
    "\t\t<div ng-include=\"bodyTemplateUrl\" ng-if=\"!bodyTemplate\" onload=\"onInclude()\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"bodyTemplate\" gr-template=\"bodyTemplate\" gr-name=\"editEntityTemplate\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"dialog-btn\">\r" +
    "\n" +
    "\t\t\t<button class=\"save-btn\" ng-if=\"enableSave\" ng-click=\"save()\">{{::'save' | translate}}</button>\r" +
    "\n" +
    "\t\t\t<button class=\"close-btn\" ng-click=\"close()\">{{::'close' | translate}}</button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/mouse-over.html',
    "<div class=\"mouse-over\" ng-style=\"style\">\r" +
    "\n" +
    "\t<div class=\"mouse-over-simple\" ng-if=\"type.isSimple\">\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-simple__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"mouse-over-simple__header__text\">{{value.header | translate}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-simple__body\">\r" +
    "\n" +
    "\t\t\t<div ng-repeat=\"val in value.data\" class=\"mouse-over-simple__body__value\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-simple__body__value__text\">{{::'Campaing ID' | translate}}: {{val.campaignId}}</span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-simple__body__value__text\">{{::'Ad ID' | translate}}: {{val.adId}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"mouse-over-medium\" ng-if=\"type.isMedium\">\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-medium__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"mouse-over-simple__medium__text\">{{value.header | translate}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-medium__body\">\r" +
    "\n" +
    "\t\t\t<div class=\"mouse-over-medium__body__blockSegm\" ng-style=\"{float: 'left'}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-medium__body__header\">\r" +
    "\n" +
    "\t\t\t\t\t{{:: 'topSegments' | translate}}\r" +
    "\n" +
    "\t\t\t\t</span>\r" +
    "\n" +
    "\t\t\t\t<div ng-repeat=\"prop in value.data.topSegments\">\r" +
    "\n" +
    "\t\t\t\t\t<span class=\"mouse-over-medium__body__value__text\">{{prop | translate}}</span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"mouse-over-medium__body__blockCampaing\" ng-style=\"{float: 'right'}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-medium__body__header\">\r" +
    "\n" +
    "\t\t\t\t\t{{:: 'topCampaigns' | translate}}\r" +
    "\n" +
    "\t\t\t\t</span>\r" +
    "\n" +
    "\t\t\t\t<div ng-repeat=\"prop in value.data.topCampaings\">\r" +
    "\n" +
    "\t\t\t\t\t<span class=\"mouse-over-medium__body__value__text\">{{prop | translate}}</span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"mouse-over-custom\" ng-if=\"type.isCustom\">\r" +
    "\n" +
    "\t\t<div ng-if=\"type.templateUrl\" ng-include=\"type.templateUrl\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"!type.templateUrl\" gr-template=\"type.template\" gr-name=\"mouseOverTemplate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/overlay.html',
    "<div class=\"custom-overlay\" ng-style=\"style\">\r" +
    "\n" +
    "\t<div class=\"custom-overlay__toggle\">\r" +
    "\n" +
    "\t\t<span ng-click=\"state = !state\" ng-show=\"!state\" class=\"glyphicon glyphicon-chevron-left\"></span>\r" +
    "\n" +
    "\t\t<span ng-click=\"state = !state\" ng-show=\"state\" class=\"glyphicon glyphicon-chevron-right\"></span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<ng-transclude class=\"custom-overlay__transclude\" ng-style=\"transcludeStyle\"></ng-transclude>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/page-content-cards.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<content-options-cards options=\"contentOptions\"></content-options-cards>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__actions\">\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__export\" dropdown=\"exports.options\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__cards\" content-options=\"contentOptions\" cards=\"cardsOptions\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div custom-ui-grid grid-data=\"data\" grid-options=\"uiGridOptions\" content-options=\"contentOptions\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__footer\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/page-content-d3.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<div content-options-d3 options=\"contentOptions\" filters=\"filters\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__cards\" cards=\"cardsOptions\" content-options=\"contentOptions\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div class=\"core-diagram\" core-diagram=\"{}\" sankey-data=\"sankeyData\"></div>\r" +
    "\n" +
    "\t\t\t<div overlay>\r" +
    "\n" +
    "\t\t\t\t<div class=\"histogram-content\" histogram histogram-data=\"histogramData\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/page-content.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__icon\">\r" +
    "\n" +
    "\t\t\t<span class=\"page-content__icon__text icon-text2\"></span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__name\">\r" +
    "\n" +
    "\t\t\t{{grid.name | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__count\">\r" +
    "\n" +
    "\t\t\t{{grid.count}} {{::'records' | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__actions\">\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__export\" dropdown=\"exports.options\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__view\" dropdown=\"views.options\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<content-options options=\"contentOptions\"></content-options>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div custom-grid grid-data=\"data\" export-to=\"exports.options.selected\" ng-show=\"views.options.selected.isGrid\" grid-options=\"gridOptions\"></div>\r" +
    "\n" +
    "\t\t\t<div custom-ui-grid grid-data=\"data\" ng-if=\"views.options.selected.isUiGrid\" grid-options=\"uiGridOptions\" content-options=\"contentOptions\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__footer\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/search.html',
    "<div class=\"search\">\r" +
    "\n" +
    "\t<input type=\"search\" ng-model=\"searchValue\" />\r" +
    "\n" +
    "\t<span class=\"search-span icon-search\" ng-show=\"edited\">\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "\t<span class=\"search-clear icon-close\" ng-click=\"clear()\" ng-show=\"!edited\">\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/split-button.html',
    "<button class=\"split-btn\" ng-click=\"close()\">\r" +
    "\n" +
    "\t<div ng-if=\"actions.selected\">\r" +
    "\n" +
    "\t\t<div ng-if=\"!actions.isComplex\">\r" +
    "\n" +
    "\t\t\t{{actions.selected.label | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"actions.isComplex\">\r" +
    "\n" +
    "\t\t\t{{::'choose' | translate}} {{actions.selected.label | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div ng-if=\"!actions.selected\" style=\"opacity: 0.5\">\r" +
    "\n" +
    "\t\t{{typehead | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"split-btn__toggle\" ng-click=\"toggle()\" ng-class=\"{'opened' : isShow}\" any-other-click=\"isShow=false\">\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{'icon-menu-up': isShow, 'icon-menu-down' : !isShow}\">\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<ul class=\"split-btn__list\" ng-show=\"isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in actions\" ng-click=\"select(action)\"><a>{{action.label | translate}}</a> </li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</button>"
  );


  $templateCache.put('/src/app/templates/directive-templates/ui-grid-menu.html',
    "<div class=\"ui-grid-menu\">\r" +
    "\n" +
    "\t<dropdown class=\"ui-grid-menu__options\" dropdown-options=\"options\"></dropdown>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/upload.html',
    "<label>\r" +
    "\n" +
    "\t<input type=\"file\" />\r" +
    "\n" +
    "\t<span ng-if=\"!label\">{{::'upload' | translate}}</span>\r" +
    "\n" +
    "\t<span ng-if=\"label\">{{label | translate}}</span>\r" +
    "\n" +
    "</label>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/cell-without-sort.html',
    "<div class=\"ngHeaderSortColumn {{col.headerClass}}\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !noSortVisible }\">\r" +
    "\n" +
    "\t<div ng-click=\"col.sort($event)\" ng-class=\"'colt' + col.index\" class=\"ngHeaderText\">\r" +
    "\n" +
    "\t\t{{col.displayName | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ngSortButtonDown\" ng-show=\"col.showSortButtonDown()\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ngSortButtonUp\" ng-show=\"col.showSortButtonUp()\"></div><div class=\"ngSortPriority\">\r" +
    "\n" +
    "\t\t{{col.sortPriority | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div ng-class=\"{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }\" ng-click=\"togglePin(col)\" ng-show=\"col.pinnable\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"col.resizable\" class=\"ngHeaderGrip\" ng-click=\"col.gripClick($event)\" ng-mousedown=\"col.gripOnMouseDown($event)\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/cell.html',
    "<div class=\"column\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !noSortVisible }\" ng-class=\"{ 'ngSorted': !noSortVisible }\">\r" +
    "\n" +
    "\t<div class=\"column__sort\" ng-click=\"col.sort($event)\" ng-style=\"{'height': col.headerRowHeight}\">\r" +
    "\n" +
    "\t\t<div class=\"column__name\" ng-style=\"{'height': col.headerRowHeight}\">\r" +
    "\n" +
    "\t\t\t<span class=\"column__name__span\">{{col.displayName | translate}}</span>\r" +
    "\n" +
    "\t\t\t<div class=\"column__sort-down\" ng-show=\"col.showSortButtonDown()\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"icon-arrow-down\"></span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"column__sort-up\" ng-show=\"col.showSortButtonUp()\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"icon-arrow-up\"></span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/action.html',
    "<div class=\"action\" ng-if=\"row.orig.actions.values.isShow\" ng-style=\"dropdownOpt.style\">\r" +
    "\n" +
    "\t<div class=\"dynamic-dropdown\" dynamic-dropdown orig-opt=\"row.orig.actions.values.options\" dropdown-opt=\"dropdownOpt\" col=\"col\" row=\"row\" re-init=\"row.orig.actions.values\"></div>\r" +
    "\n" +
    "\t<div class=\"action__dropdown\" dropdown=\"dropdownOpt\" ng-if=\"dropdownOpt.isVisible\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/date.html',
    "<div class=\"row-date\">\r" +
    "\n" +
    "\t<div class=\"row-date__value wrap\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | date}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/details.html',
    "<div class=\"cell-details\">\r" +
    "\n" +
    "\t<span class=\"cell-details__expand\" details row=\"row\" details-class=\"'toggle'\" ng-class=\"{'icon-menu-down' : !row.orig.actions.isToggle, 'icon-menu-up': row.orig.actions.isToggle}\"></span>\r" +
    "\n" +
    "\t<div class=\"cell-details__check\">\r" +
    "\n" +
    "\t\t<label class=\"cell-details__input\">\r" +
    "\n" +
    "\t\t\t<input type=\"checkbox\" ng-model=\"row.orig.actions.isCheck\" ng-change=\"row.orig.actions.setCheck(row.orig)\" />\r" +
    "\n" +
    "\t\t\t<span class=\"cell-details__input__check\"></span>\r" +
    "\n" +
    "\t\t</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/name.html',
    "<div class=\"row-name wrap\">\r" +
    "\n" +
    "\t<i class=\"glyphicon glyphicon-picture\"></i>\r" +
    "\n" +
    "\t<div class=\"row-name__value\">\r" +
    "\n" +
    "\t\t<span>{{row.getProperty(col.field) | translate}}</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/status.html',
    "<div class=\"row-status\">\r" +
    "\n" +
    "\t<div class=\"row-status__value\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/trend.html',
    "<div class=\"row-trend wrap\">\r" +
    "\n" +
    "\t<div class=\"row-trend__value \">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/type.html',
    "<div class=\"row-type\">\r" +
    "\n" +
    "\t<div class=\"row-type__value wrap\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/value.html',
    "<div class=\"row-value\">\r" +
    "\n" +
    "\t<div class=\"row-value__value\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | currency}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details-example1.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tDefrault template 1\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details-example2.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tOther details template\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details-upload.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tFrom upload template\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details.html',
    "<div class=\"details-template\" ng-init=\"row.actions.tab = row.actions.tab || 2\">\r" +
    "\n" +
    "\t<ul>\r" +
    "\n" +
    "\t\t<li ng-class=\"{active:row.actions.tab===1}\">\r" +
    "\n" +
    "\t\t\t<label ng-click=\"row.actions.tab = 1\">Overview</label>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li ng-class=\"{active:row.actions.tab===2}\">\r" +
    "\n" +
    "\t\t\t<label ng-click=\"row.actions.tab = 2\">Details Information</label>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "\t<div class=\"content\">\r" +
    "\n" +
    "\t\t<div class=\"overview\" ng-show=\"row.actions.tab === 1\">\r" +
    "\n" +
    "\t\t\t<div class=\"headers\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Overview:</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"props\">\r" +
    "\n" +
    "\t\t\t\t<span>  Campaign, Refer</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"details-information\" ng-show=\"row.actions.tab === 2\">\r" +
    "\n" +
    "\t\t\t<div class=\"headers\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Attributes:</span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Created:</span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Last Modified:</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"props\">\r" +
    "\n" +
    "\t\t\t\t<span>  Campaign, Refer</span>\r" +
    "\n" +
    "\t\t\t\t<span>  Demo User, 2015-03-03</span>\r" +
    "\n" +
    "\t\t\t\t<span>  Victoria Rabinovich, 2015-03-03</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/dynamic-actions.html',
    "<div ng-repeat=\"o in dynamicOpt.values\" class=\"dynamic-actions\" ng-class=\"o.label\" ng-show=\"o.isVisible\" on-finish-render=\"ngRepeatFinished\">\r" +
    "\n" +
    "\t<button class=\"dynamic-actions__btn\" ng-click=\"dynamicOpt.callback(o)\">{{o.label | translate}}</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/grid-footer.html',
    "<div ng-show=\"showFooter\" class=\"ngFooterPanel\" ng-class=\"{'ui-widget-CONTENT': jqueryUITheme, 'ui-corner-bottom': jqueryUITheme}\" ng-style=\"footerStyle()\">\r" +
    "\n" +
    "\t<div class=\"ngPagerContainer\" style=\"float: right; margin-top: 10px;\" ng-show=\"enablePaging\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\">\r" +
    "\n" +
    "\t\t<div style=\"float:left; margin-right: 10px;\" class=\"ngRowCountPicker\">\r" +
    "\n" +
    "\t\t\t<span style=\"float: left; margin-top: 3px;\" class=\"ngLabel\">{{i18n.ngPageSizeLabel}}</span>\r" +
    "\n" +
    "\t\t\t<select style=\"float: left;height: 27px; width: 100px\" ng-model=\"pagingOptions.pageSize\">\r" +
    "\n" +
    "\t\t\t\t<option ng-repeat=\"size in pagingOptions.pageSizes\">{{size}}</option>\r" +
    "\n" +
    "\t\t\t</select>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div style=\"float:left; margin-right: 10px; line-height:25px;\" class=\"ngPagerControl\" style=\"float: left; min-width: 135px;\">\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageToFirst()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerFirstTitle}}\"><div class=\"ngPagerFirstTriangle\"><div class=\"ngPagerFirstBar\"></div></div></button>\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageBackward()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerPrevTitle}}\"><div class=\"ngPagerFirstTriangle ngPagerPrevTriangle\"></div></button>\r" +
    "\n" +
    "\t\t\t<input class=\"ngPagerCurrent\" min=\"1\" max=\"{{maxPages()}}\" type=\"number\" style=\"width:50px; height: 24px; margin-top: 1px; padding: 0 4px;\" ng-model=\"pagingOptions.currentPage\" />\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageForward()\" ng-disabled=\"cantPageForward()\" title=\"{{i18n.ngPagerNextTitle}}\"><div class=\"ngPagerLastTriangle ngPagerNextTriangle\"></div></button>\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageToLast()\" ng-disabled=\"cantPageToLast()\" title=\"{{i18n.ngPagerLastTitle}}\"><div class=\"ngPagerLastTriangle\"><div class=\"ngPagerLastBar\"></div></div></button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/row-templates/header-row.html',
    "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell\" ng-header-cell></div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/row-templates/row-with-detalis.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell {{col.cellClass}}\" row-check=\"row\" ng-click=\"row.orig.actions.select(row)\">\r" +
    "\n" +
    "\t<div ng-cell>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/row-templates/row.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell \" row-check=\"row\" ng-click=\"row.orig.actions.select(row)\">\r" +
    "\n" +
    "\t<div ng-cell>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/cell-templates/action.html',
    "<div class=\"action\" ng-if=\"row.isSelected\" ng-style=\"dropdownOpt.style\">\r" +
    "\n" +
    "\t<div class=\"dynamic-dropdown\" dynamic-dropdown orig-opt=\"row.actions.options\" dropdown-opt=\"dropdownOpt\" col=\"col\" row=\"row\" re-init=\"row.actions.options\"></div>\r" +
    "\n" +
    "\t<div class=\"action__dropdown\" dropdown=\"dropdownOpt\" ng-if=\"dropdownOpt.isVisible\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/cell-templates/details.html',
    "<div class=\"cell-details\">\r" +
    "\n" +
    "\t<span class=\"cell-details__expand\" ng-click=\"row.actions.expand(row)\" ng-if=\"grid.options.enableExpandable\" ng-class=\"{'icon-menu-down' : !row.isExpanded, 'icon-menu-up': row.isExpanded}\"></span>\r" +
    "\n" +
    "\t<div class=\"cell-details__check\" ng-if=\"!row.actions.disableCheck\">\r" +
    "\n" +
    "\t\t<label class=\"cell-details__input\">\r" +
    "\n" +
    "\t\t\t<input type=\"checkbox\" ng-model=\"row.isCheck\" ng-change=\"row.actions.setCheck(row)\" />\r" +
    "\n" +
    "\t\t\t<span class=\"cell-details__input__check\"></span>\r" +
    "\n" +
    "\t\t</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/cell-templates/header.html',
    "<div ng-class=\"{ 'sortable': sortable }\">\r" +
    "\n" +
    "\t<div class=\"ui-grid-cell-contents\" col-index=\"renderIndex\" title=\"TOOLTIP\">\r" +
    "\n" +
    "\t\t<span>{{ col.displayName CUSTOM_FILTERS }}</span>\r" +
    "\n" +
    "\t\t<span ng-if=\"col.sort.direction\" ui-grid-visible=\"col.sort.direction\" ng-class=\"{ 'icon-arrow-up': col.sort.direction == asc, 'icon-arrow-down': col.sort.direction == desc, 'ui-grid-icon-blank': !col.sort.direction }\">\r" +
    "\n" +
    "\t\t\t&nbsp;\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ui-grid-column-menu-button\" ng-if=\"grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false\" ng-click=\"toggleMenu($event)\" ng-class=\"{'ui-grid-column-menu-button-last-col': isLastCol}\">\r" +
    "\n" +
    "\t\t<i class=\"ui-grid-icon-angle-down\">&nbsp;</i>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div ui-grid-filter></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/header.html',
    "<div class=\"ui-grid-header\">\r" +
    "\n" +
    "\t<div class=\"ui-grid-top-panel\">\r" +
    "\n" +
    "\t\t<div class=\"ui-grid-header-viewport\">\r" +
    "\n" +
    "\t\t\t<div class=\"ui-grid-header-canvas\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"ui-grid-header-cell-wrapper\" ng-style=\"colContainer.headerCellWrapperStyle()\">\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"ui-grid-header-cell-row\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"ui-grid-header-cell ui-grid-clearfix\" ng-repeat=\"col in colContainer.renderedColumns track by col.uid\" ui-grid-header-cell col=\"col\" render-index=\"$index\"></div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/row.html',
    "<div ng-click=\"grid.appScope.fnOne(row)\"\r" +
    "\n" +
    "\t ng-repeat=\"col in colContainer.renderedColumns track by col.colDef.name\"\r" +
    "\n" +
    "\t class=\"ui-grid-cell\" ng-class=\"{'checked': row.isCheck, 'expanded': row.isExpanded, 'selected': row.isSelected}\" ui-grid-cell>\r" +
    "\n" +
    "</div>"
  );

}]);
