angular.module('ext').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/src/app/ext.common/ext-datepicker/templates/ext-datepicker.html',
    "<button class=\"date-btn\" ng-click=\"vm.close()\">\r" +
    "\n" +
    "\t<span class=\"date-btn__icon glyph-calendar\"></span>\r" +
    "\n" +
    "\t<span class=\"date-btn__text\">{{vm.opt.startDate | date}} - {{vm.opt.endDate | date}}</span>\r" +
    "\n" +
    "\t<button class=\"date-btn__toggle\" ng-click=\"vm.toggle()\" ng-class=\"{'opened': vm.isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{ 'icon-menu-up': vm.isShow, 'icon-menu-down': !vm.isShow }\">\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<div class=\"date-btn__datepicker\" ng-if=\"vm.isShow\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</button>"
  );


  $templateCache.put('/src/app/ext.common/ext-dropdown/templates/ext-dropdown.html',
    "<div class=\"my-dropdown\" any-other-click=\"vm.isShow=false\">\r" +
    "\n" +
    "\t<button type=\"button\" class=\"my-dropdown__btn\" ng-show=\"!vm.options.isMenu\" ng-click=\"vm.isShow = !vm.isShow\" ng-class=\"{'opened' : vm.isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__text\" ng-show=\"!vm.options.isCheckbox\">{{vm.options.label}}{{vm.options.selected.label}}</span>\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__expand\" ng-class=\"{'icon-menu-up': vm.isShow, 'icon-menu-down' : !vm.isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<button type=\"button\" class=\"my-dropdown__btn\" ng-show=\"vm.options.isMenu\" ng-click=\"vm.isShow = !vm.isShow\" ng-class=\"{'opened' : vm.isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__text\">{{vm.options.label}}</span>\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__expand\" ng-class=\"{'icon-menu-up': vm.isShow, 'icon-menu-down' : !vm.isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<ul class=\"my-dropdown__list\" ng-show=\"vm.isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in vm.options.values\">\r" +
    "\n" +
    "\t\t\t<div ng-if=\"vm.options.isCheckbox\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-dropdown__list__check\">\r" +
    "\n" +
    "\t\t\t\t\t<label class=\"my-dropdown__list__input-control\">\r" +
    "\n" +
    "\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"action.isVisible\" ng-change=\"vm.options.onCheck(action, $index)\" id=\"{{action.label}}\">\r" +
    "\n" +
    "\t\t\t\t\t\t<span class=\"my-dropdown__list__input-control__span\"></span>\r" +
    "\n" +
    "\t\t\t\t\t</label>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<label class=\"my-dropdown__list__label\" for=\"{{action.label}}\">{{action.label}}</label>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<a ng-click=\"vm.select(action)\" ng-if=\"!vm.options.isCheckbox\">{{action.label}}</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<button ng-if=\"vm.options.withSave\" ng-click=\"vm.options.onSave()\" class=\"my-dropdown__save\">{{::'Save'}}</button>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.common/ext-dropdown/templates/ext-dynamic-dropdown.html',
    "<div ng-repeat=\"o in dynamicOpt.values\" class=\"dynamic-actions\" ng-class=\"o.label\" ng-show=\"o.isVisible\" ext-on-finish-render=\"ngRepeatFinished\">\r" +
    "\n" +
    "\t<button class=\"dynamic-actions__btn\" ng-click=\"dynamicOpt.callback(o)\">{{o.label}}</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.common/ext-loading/templates/ext-loading.html',
    "<div class=\"loading\" ng-style=\"vm.element\">\r" +
    "\n" +
    "\t<div class=\"loading-disabled\" ng-style=\"vm.disabled\">\r" +
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


  $templateCache.put('/src/app/ext.common/ext-search/templates/ext-search.html',
    "<div class=\"search\">\r" +
    "\n" +
    "\t<input type=\"search\" ng-model=\"vm.searchValue\" ng-change=\"vm.searchValueChanged(vm.searchValue)\" />\r" +
    "\n" +
    "\t<span class=\"search-span icon-search\" ng-show=\"!vm.edited\">\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "\t<span class=\"search-clear icon-close\" ng-click=\"vm.clear()\" ng-show=\"vm.edited\">\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.common/ext-split-button/templates/ext-split-button.html',
    "<button class=\"split-btn\" ng-click=\"vm.close()\">\r" +
    "\n" +
    "\t<div ng-if=\"vm.actions.selected\">\r" +
    "\n" +
    "\t\t<div ng-if=\"!vm.actions.isComplex\">\r" +
    "\n" +
    "\t\t\t{{vm.actions.selected.label}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"vm.actions.isComplex\">\r" +
    "\n" +
    "\t\t\tChoose {{vm.actions.selected.label}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div ng-if=\"!vm.actions.selected\" style=\"opacity: 0.5\">\r" +
    "\n" +
    "\t\t{{typehead}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"split-btn__toggle\" ng-click=\"vm.toggle()\" ng-class=\"{'opened' : vm.isShow}\" any-other-click=\"vm.isShow=false\">\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{'icon-menu-up': vm.isShow, 'icon-menu-down' : !vm.isShow}\">\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<ul class=\"split-btn__list\" ng-show=\"vm.isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in vm.actions\" ng-click=\"vm.select(action)\"><a>{{action.label}}</a> </li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</button>"
  );


  $templateCache.put('/src/app/ext.common/ext-upload/templates/ext-upload.html',
    "<label>\r" +
    "\n" +
    "\t<input type=\"file\" />\r" +
    "\n" +
    "\t<span ng-if=\"!vm.label\">Upload</span>\r" +
    "\n" +
    "\t<span ng-if=\"vm.label\">{{vm.label}}</span>\r" +
    "\n" +
    "</label>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.common/gr-template/templates/gr-template.html',
    "<div ng-include=\"templateUrl\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-cards/templates/ext-cards.html',
    "<div class=\"cards-group\" ng-style=\"vm.groupStyle\">\r" +
    "\n" +
    "\t<div class=\"my-card\" id=\"{{vm.contentOptions.debugCard.id}}\" ng-if=\"vm.contentOptions.enableDebugging\" ng-style=\"vm.contentOptions.debugCard.style\">\r" +
    "\n" +
    "\t\t<div class=\"front\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-info\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{vm.contentOptions.debugCard.text}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<span>{{vm.contentOptions.debugCard.body}}</span>\r" +
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
    "\t\t\t\t<span class=\"my-card__header__text\">{{vm.contentOptions.debugCard.text}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<div ng-if=\"!vm.contentOptions.debugCard.template\" ng-include=\"vm.contentOptions.debugCard.templateUrl\">\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<div ng-if=\"vm.contentOptions.debugCard.template\" gr-template=\"vm.contentOptions.debugCard.template\" gr-name=\"vm.debugTemplate\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"my-card\" ng-repeat=\"(id, card) in vm.cards\" id=\"{{id}}\" ng-style=\"card.style\">\r" +
    "\n" +
    "\t\t<div class=\"front\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-info\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{card.label}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div ng-if=\"card.counter\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-card__body\" ng-init=\"card.count = card.counter.calculate(vm.startDate, vm.endDate) || card.count\">\r" +
    "\n" +
    "\t\t\t\t\t<span ext-number-format=\"card.count\"></span>\r" +
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
    "\t\t\t\t<span class=\"my-card__header__text\">{{card.label}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-card__body__graphs\" ext-graphs=\"card.graphs\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-cards/templates/ext-graphs.html',
    "<div ng-repeat=\"graph in vm.graphs\" class=\"graphs\" ng-style=\"graph.style\">\r" +
    "\n" +
    "\t<div class=\"graph\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-checkbox-select/templates/ext-checkbox-select.html',
    "<div class=\"checkbox-select\" any-other-click=\"vm.isShow=false\">\r" +
    "\n" +
    "\t<div class=\"checkbox-select__check\">\r" +
    "\n" +
    "\t\t<label class=\"checkbox-select__input-control\">\r" +
    "\n" +
    "\t\t\t<input type=\"checkbox\" ng-model=\"vm.options.selected.check\" ng-change=\"vm.checked(vm.options.selected.check)\" />\r" +
    "\n" +
    "\t\t\t<span class=\"checkbox-select__input-control__span\" ng-class=\"{'marked':vm.options.selected.isMarked || vm.options.selected.isNotMarked}\"></span>\r" +
    "\n" +
    "\t\t</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button type=\"button\" class=\"checkbox-select__btn\" ng-class=\"{'opened' : vm.isShow}\" ng-click=\"vm.toggle()\">\r" +
    "\n" +
    "\t\t<span class=\"checkbox-select__expand\" ng-class=\"{'icon-menu-down': !vm.isShow, 'icon-menu-up': vm.isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<ul class=\"checkbox-select__list\" ng-show=\"vm.isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in vm.options.actions\" ng-click=\"vm.select(action)\"><a>{{action.label}}</a></li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-content-options-cards/templates/ext-content-options-cards.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div ext-datepicker=\"vm.options.datepickerOptions\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__filter\">\r" +
    "\n" +
    "\t\t<ext-split-button class=\"options__show\" actions=\"vm.options.searchOptions\" selected=\"options.show\" search=\"vm.options.searchValue\"></ext-split-button>\r" +
    "\n" +
    "\t\t<ext-search class=\"options__search\" search-value=\"vm.options.searchValue\" on-change=\"vm.searchValueChanged\"></ext-search>\r" +
    "\n" +
    "\t\t<div class=\"options__filt\" ext-filter=\"vm.options.filterOptions\" on-filtrate=\"vm.options.filtrate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-content-options/templates/ext-content-options.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div ext-checkbox-select=\"vm.options.checks\" class=\"options__check\"></div>\r" +
    "\n" +
    "\t\t<button class=\"options__refresh\" ng-click=\"vm.options.refresh()\">Refresh</button>\r" +
    "\n" +
    "\t\t<div ext-dropdown=\"vm.options.mores\" class=\"options__more\"></div>\r" +
    "\n" +
    "\t\t<ext-upload class=\"options__upload\" ng-if=\"vm.options.withUpload\" upload-callback=\"vm.options.upload\"></ext-upload>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__filter\">\r" +
    "\n" +
    "\t\t<ext-search class=\"options__search\" search-value=\"vm.options.searchValue\" on-change=\"vm.searchValueChanged\"></ext-search>\r" +
    "\n" +
    "\t\t<ext-split-button class=\"options__show\" actions=\"vm.options.searchOptions\" selected=\"vm.options.show\" search=\"vm.options.searchValue\"></ext-split-button>\r" +
    "\n" +
    "\t\t<div class=\"options__filt\" ext-filter=\"vm.options.filterOptions\" on-filtrate=\"vm.options.filtrate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-filter/templates/ext-filter-list.html',
    "<div class=\"filter-list\">\r" +
    "\n" +
    "\t<div class=\"filter-list__header\">\r" +
    "\n" +
    "\t\tFilter list\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"filter-list__options\">\r" +
    "\n" +
    "\t\t<div class=\"filter-list__options__value\" ng-repeat=\"opt in filterOptions\">\r" +
    "\n" +
    "\t\t\t<div class=\"filter-list__options__value__header\">\r" +
    "\n" +
    "\t\t\t\t{{opt.label}}\r" +
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
    "\t\t<button class=\"filter-list__button\" ng-click=\"showRecords()\">Show records</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-filter/templates/ext-filter.html',
    "<div class=\"filter\" any-other-click=\"listState=false\" ng-class=\"{'filter-selected' : listState}\">\r" +
    "\n" +
    "\t<button class=\"filter__btn\" ng-click=\"filterClick()\">\r" +
    "\n" +
    "\t\t<span class=\"filter__icon icon-filter\"></span>\r" +
    "\n" +
    "\t\t<span class=\"filter__name\">Filter</span>\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{'icon-menu-up': listState, 'icon-menu-down' : !listState}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<div ng-show=\"listState\">\r" +
    "\n" +
    "\t\t<div class=\"filter__list\" ext-filter-list  ext-resize-on=\"listState\" parent=\".filter\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/edit-entity.html',
    "<h1>Edit entity</h1>\r" +
    "\n" +
    "<div ng-repeat=\"(key, value) in vm.myEntity\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span><input class=\"dialog__value\" ng-model=\"vm.myEntity[key]\" />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/ext-grid-menu.html',
    "<div class=\"grid-menu\" ng-show=\"vm.isShow\">\r" +
    "\n" +
    "\t<div class=\"grid-menu__options\" ext-dropdown=\"vm.menu.opt\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/ext-grid.html',
    "<div class=\"custom-grid\" ng-grid=\"options\">\r" +
    "\n" +
    "\t<div ext-grid-menu class=\"custom-grid__menu\" options=\"options.menu\" columns=\"columns\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/cell-without-sort.html',
    "<div class=\"ngHeaderSortColumn {{col.headerClass}}\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !noSortVisible }\">\r" +
    "\n" +
    "\t<div ng-click=\"col.sort($event)\" ng-class=\"'colt' + col.index\" class=\"ngHeaderText\">\r" +
    "\n" +
    "\t\t{{col.displayName}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ngSortButtonDown\" ng-show=\"col.showSortButtonDown()\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ngSortButtonUp\" ng-show=\"col.showSortButtonUp()\"></div><div class=\"ngSortPriority\">\r" +
    "\n" +
    "\t\t{{col.sortPriority}}\r" +
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


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/cell.html',
    "<div class=\"column\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !noSortVisible }\" ng-class=\"{ 'ngSorted': !noSortVisible }\">\r" +
    "\n" +
    "\t<div class=\"column__sort\" ng-click=\"col.sort($event)\" ng-style=\"{'height': col.headerRowHeight}\">\r" +
    "\n" +
    "\t\t<div class=\"column__name\" ng-style=\"{'height': col.headerRowHeight}\">\r" +
    "\n" +
    "\t\t\t<span class=\"column__name__span\">{{col.displayName}}</span>\r" +
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


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/action.html',
    "<div class=\"action\" ng-if=\"row.orig.actions.values.isShow\" ng-style=\"dropdownOpt.style\">\r" +
    "\n" +
    "\t<div class=\"dynamic-dropdown\" ext-dynamic-dropdown orig-opt=\"row.orig.actions.values.options\" dropdown-opt=\"dropdownOpt\" col=\"col\" row=\"row\" re-init=\"row.orig.actions.values\"></div>\r" +
    "\n" +
    "\t<div class=\"action__dropdown\" ext-dropdown=\"dropdownOpt\" ng-if=\"dropdownOpt.isVisible\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/date.html',
    "<div class=\"row-date\">\r" +
    "\n" +
    "\t<div class=\"row-date__value wrap\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field)}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/details.html',
    "<div class=\"cell-details\">\r" +
    "\n" +
    "\t<span class=\"cell-details__expand\" ext-details row=\"row\" details-class=\"'toggle'\" ng-class=\"{'icon-menu-down' : !row.orig.actions.isToggle, 'icon-menu-up': row.orig.actions.isToggle}\"></span>\r" +
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


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/name.html',
    "<div class=\"row-name wrap\">\r" +
    "\n" +
    "\t<i class=\"glyphicon glyphicon-picture\"></i>\r" +
    "\n" +
    "\t<div class=\"row-name__value\">\r" +
    "\n" +
    "\t\t<span>{{row.getProperty(col.field)}}</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/status.html',
    "<div class=\"row-status\">\r" +
    "\n" +
    "\t<div class=\"row-status__value\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field)}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/trend.html',
    "<div class=\"row-trend wrap\">\r" +
    "\n" +
    "\t<div class=\"row-trend__value \">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field)}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/type.html',
    "<div class=\"row-type\">\r" +
    "\n" +
    "\t<div class=\"row-type__value wrap\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field)}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/cell-templates/fields/value.html',
    "<div class=\"row-value\">\r" +
    "\n" +
    "\t<div class=\"row-value__value\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field)}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/details-templates/details-example1.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tDefrault template 1\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/details-templates/details-example2.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tOther details template\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/details-templates/details-upload.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tFrom upload template\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/details-templates/details.html',
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


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/grid-footer.html',
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


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/row-templates/header-row.html',
    "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell\" ng-header-cell></div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/row-templates/row-with-detalis.html',
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


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/grid-templates/row-templates/row.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell \" ext-row-check=\"row\" ng-click=\"row.orig.actions.select(row)\">\r" +
    "\n" +
    "\t<div ng-cell>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-grid/templates/history.html',
    "<h1>History</h1>\r" +
    "\n" +
    "<div class=\"message\" ng-if=\"vm.value.length == 0\">History is empty.</div>\r" +
    "\n" +
    "<div class=\"history__content\" ng-repeat=\"hist in vm.value\">\r" +
    "\n" +
    "\t<div class=\"dialog__oldVal\">\r" +
    "\n" +
    "\t\tOld value: <div ng-repeat=\"(key, value) in hist.oldObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span>:<span class=\"dialog__value\">{{value}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__newVal\">\r" +
    "\n" +
    "\t\tNew value: <div ng-repeat=\"(key, value) in hist.newObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span>:<span class=\"dialog__value\">{{value}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__dateChange\">\r" +
    "\n" +
    "\t\tDate of change: <span>{{hist.dateChange}}</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-modal/templates/ext-modal.html',
    "<div class=\"modal\" ng-class=\"vm.modal\" ng-if=\"vm.isModal\">\r" +
    "\n" +
    "\t<div class=\"fade\" ng-style=\"vm.fade\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog\">\r" +
    "\n" +
    "\t\t<div ng-include=\"vm.bodyTemplateUrl\" ng-if=\"!vm.bodyTemplate\" onload=\"vm.onInclude()\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"vm.bodyTemplate\" gr-template=\"vm.bodyTemplate\" gr-name=\"vm.editEntityTemplate\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"dialog-btn\">\r" +
    "\n" +
    "\t\t\t<button class=\"save-btn\" ng-if=\"vm.enableSave\" ng-click=\"vm.save()\">Save</button>\r" +
    "\n" +
    "\t\t\t<button class=\"close-btn\" ng-click=\"vm.close()\">Close</button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-page-content-cards/templates/ext-page-content-cards.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<ext-content-options-cards options=\"vm.contentOptions\"></ext-content-options-cards>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__actions\">\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__export\" ext-dropdown=\"vm.contentOptions.exports.options\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__cards\" content-options=\"vm.contentOptions\" ext-cards=\"vm.cardsOptions\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div ext-ui-grid grid-data=\"vm.data\" grid-options=\"vm.uiGridOptions\" content-options=\"vm.contentOptions\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__footer\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-page-content/templates/ext-page-content.html',
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
    "\t\t\t{{vm.grid.name}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__count\">\r" +
    "\n" +
    "\t\t\t{{vm.grid.count}} records\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__actions\">\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__export\" ext-dropdown=\"vm.grid.exports.options\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__view\" ext-dropdown=\"vm.grid.views.options\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<ext-content-options options=\"vm.contentOptions\"></ext-content-options>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div ext-grid grid-data=\"vm.data\" export-to=\"vm.grid.exports.options.selected\" ng-show=\"vm.grid.views.options.selected.isGrid\"\r" +
    "\n" +
    "\t\t\tgrid-options=\"vm.gridOptions\" content-options=\"vm.contentOptions\"></div>\r" +
    "\n" +
    "\t\t\t<div ext-ui-grid grid-data=\"vm.data\" ng-if=\"vm.grid.views.options.selected.isUiGrid\" grid-options=\"vm.uiGridOptions\"\r" +
    "\n" +
    "\t\t\tcontent-options=\"vm.contentOptions\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__footer\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/edit-entity.html',
    "<h1>Edit entity</h1>\r" +
    "\n" +
    "<div ng-repeat=\"(key, value) in vm.myEntity\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span><input class=\"dialog__value\" ng-model=\"vm.myEntity[key]\" />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ext-ui-grid-menu.html',
    "<div class=\"ui-grid-menu\">\r" +
    "\n" +
    "\t<ext-dropdown class=\"ui-grid-menu__options\" dropdown-options=\"options\"></ext-dropdown>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ext-ui-grid.html',
    "<div ui-grid=\"vm.options\" class=\"custom-ui-grid\" ui-grid-selection ui-grid-expandable>\r" +
    "\n" +
    "\t<div ext-ui-grid-menu options=\"vm.options\" grid-api=\"vm.gridApi\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/history.html',
    "<h1>History</h1>\r" +
    "\n" +
    "<div class=\"message\" ng-if=\"vm.value.length == 0\">History is empty.</div>\r" +
    "\n" +
    "<div class=\"history__content\" ng-repeat=\"hist in vm.value\">\r" +
    "\n" +
    "\t<div class=\"dialog__oldVal\">\r" +
    "\n" +
    "\t\tOld value: <div ng-repeat=\"(key, value) in hist.oldObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span>:<span class=\"dialog__value\">{{value}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__newVal\">\r" +
    "\n" +
    "\t\tNew value: <div ng-repeat=\"(key, value) in hist.newObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span>:<span class=\"dialog__value\">{{value}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__dateChange\">\r" +
    "\n" +
    "\t\tDate of change: <span>{{hist.dateChange}}</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ui-grid-templates/cell-templates/action.html',
    "<div class=\"action\" ng-if=\"row.isSelected\" ng-style=\"dropdownOpt.style\">\r" +
    "\n" +
    "\t<div class=\"dynamic-dropdown\" ext-dynamic-dropdown orig-opt=\"row.actions.options\" dropdown-opt=\"dropdownOpt\" col=\"col\" row=\"row\" re-init=\"row.actions.options\"></div>\r" +
    "\n" +
    "\t<div class=\"action__dropdown\" ext-dropdown=\"dropdownOpt\" ng-if=\"dropdownOpt.isVisible\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ui-grid-templates/cell-templates/details.html',
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


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ui-grid-templates/cell-templates/header-cell.html',
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
    "\t<div class=\"ui-grid-column-menu-button\" ng-if=\"grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false\"\r" +
    "\n" +
    "\tng-click=\"toggleMenu($event)\" ng-class=\"{'ui-grid-column-menu-button-last-col': isLastCol}\">\r" +
    "\n" +
    "\t\t<i class=\"ui-grid-icon-angle-down\">&nbsp;</i>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div ui-grid-filter></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ui-grid-templates/details.html',
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


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ui-grid-templates/header.html',
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


  $templateCache.put('/src/app/ext.grid.modules/ext-ui-grid/templates/ui-grid-templates/row.html',
    "<div ng-click=\"grid.appScope.fnOne(row)\"\r" +
    "\n" +
    "\t ng-repeat=\"col in colContainer.renderedColumns track by col.colDef.name\"\r" +
    "\n" +
    "\t class=\"ui-grid-cell\" ng-class=\"{'checked': row.isCheck, 'expanded': row.isExpanded, 'selected': row.isSelected}\" ui-grid-cell>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.sankey.modules/ext-histogram/templates/ext-chart-segment.html',
    "<div class=\"chart-segment\">\r" +
    "\n" +
    "\t<div class=\"chart-segment__list\">\r" +
    "\n" +
    "\t\t<div class=\"chart-segment__list__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"chart-segment__list__header__text\">{{::vm.panel.header.text}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"chart-segment__list__body\">\r" +
    "\n" +
    "\t\t\t<div ng-repeat=\"user in vm.selectedUsers\" class=\"chart-segment__list__body__user\" ng-class=\"{'even' : $even, 'odd': $odd}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"chart-segment__list__body__user__icon icon-close\" ng-click=\"vm.deleteUser(user, $index)\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"chart-segment__list__body__user__text\">Users who have interacted with at least {{user.touchpoints}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"chart-segment__btn\">\r" +
    "\n" +
    "\t\t<button class=\"kx-btn\">{{::vm.panel.btn.text}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.sankey.modules/ext-histogram/templates/ext-histogram.html',
    "<div class=\"histogram\">\r" +
    "\n" +
    "\t<svg class=\"chart\">\r" +
    "\n" +
    "\t</svg>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ext-chart-segment selected-users=\"vm.selectedUsers\"></div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.sankey.modules/ext-mouse-over/templates/ext-mouse-over.html',
    "<div class=\"mouse-over\" ng-style=\"vm.style\">\r" +
    "\n" +
    "\t<div class=\"mouse-over-simple\" ng-if=\"vm.type.isSimple\">\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-simple__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"mouse-over-simple__header__text\">{{vm.value.header}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-simple__body\">\r" +
    "\n" +
    "\t\t\t<div ng-repeat=\"val in vm.value.data\" class=\"mouse-over-simple__body__value\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-simple__body__value__text\">{{::'Campaing ID'}}: {{val.campaignId}}</span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-simple__body__value__text\">{{::'Ad ID'}}: {{val.adId}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"mouse-over-medium\" ng-if=\"vm.type.isMedium\">\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-medium__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"mouse-over-simple__medium__text\">{{vm.value.header}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-medium__body\">\r" +
    "\n" +
    "\t\t\t<div class=\"mouse-over-medium__body__blockSegm\" ng-style=\"{float: 'left'}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-medium__body__header\">\r" +
    "\n" +
    "\t\t\t\t\t{{::'Top Segments'}}\r" +
    "\n" +
    "\t\t\t\t</span>\r" +
    "\n" +
    "\t\t\t\t<div ng-repeat=\"prop in vm.value.data.topSegments\">\r" +
    "\n" +
    "\t\t\t\t\t<span class=\"mouse-over-medium__body__value__text\">{{prop}}</span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"mouse-over-medium__body__blockCampaing\" ng-style=\"{float: 'right'}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-medium__body__header\">\r" +
    "\n" +
    "\t\t\t\t\t{{::'Top Campaigns'}}\r" +
    "\n" +
    "\t\t\t\t</span>\r" +
    "\n" +
    "\t\t\t\t<div ng-repeat=\"prop in vm.value.data.topCampaings\">\r" +
    "\n" +
    "\t\t\t\t\t<span class=\"mouse-over-medium__body__value__text\">{{prop}}</span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"mouse-over-custom\" ng-if=\"vm.type.isCustom\">\r" +
    "\n" +
    "\t\t<div ng-if=\"vm.type.templateUrl\" ng-include=\"vm.type.templateUrl\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"!vm.type.templateUrl\" gr-template=\"vm.type.template\" gr-name=\"mouseOverTemplate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.sankey.modules/ext-options-sankey/templates/ext-options-sankey.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div class=\"input-prepend\">\r" +
    "\n" +
    "\t\t\t<div kx-date-range=\"kx-date-range\" time-range=\"past\" name=\"dateRange\" ng-model=\"filters.dateRange\" ng-disabled=\"loading\"\r" +
    "\n" +
    "\t\t\tng-change=\"filters.onDateRangeChange()\" class=\"date-range-picker\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__select\">\r" +
    "\n" +
    "\t\t<select class=\"options__event\" ui-select2=\"options.eventType.selectOpt\" ng-model=\"options.eventOpt.options.selected\"\r" +
    "\n" +
    "\t\tdata-placeholder=\"Choose Event\" ng-required=\"true\">\r" +
    "\n" +
    "\t\t\t<option value=\"\"></option>\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.eventType.options.actions\">{{action.label}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t\t<select class=\"options__segments kx-multiselect\" kx-multiselect=\"options.segments.selectOpt\" ng-change=\"options.segments.options.onChange()\"\r" +
    "\n" +
    "\t\tng-model=\"options.segments.options.selected\" multiple=\"true\" data-placeholder=\"{{::'Choose Segments' | translate}}\">\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.segments.options.actions\">{{action.label}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t\t<select class=\"options__campaign kx-multiselect\" kx-multiselect=\"options.campaign.selectOpt\" ng-change=\"options.campaign.options.onChange()\"\r" +
    "\n" +
    "\t\tng-model=\"options.campaign.options.selected\" data-placeholder=\"{{::'Choose Campaigns' | translate}}\" multiple=\"true\">\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.campaign.options.actions\">{{action.label}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"kx-btn\" ng-click=\"options.update()\">Update</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.sankey.modules/ext-overlay/templates/ext-overlay.html',
    "<div class=\"custom-overlay\" ng-style=\"vm.style\">\r" +
    "\n" +
    "\t<div class=\"custom-overlay__toggle\">\r" +
    "\n" +
    "\t\t<span ng-click=\"vm.state = !vm.state\" ng-show=\"!vm.state\" class=\"glyphicon glyphicon-chevron-left\"></span>\r" +
    "\n" +
    "\t\t<span ng-click=\"vm.state = !vm.state\" ng-show=\"vm.state\" class=\"glyphicon glyphicon-chevron-right\"></span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<ng-transclude class=\"custom-overlay__transclude\" ng-style=\"vm.transcludeStyle\"></ng-transclude>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.sankey.modules/ext-page-sankey/templates/debug.html',
    "<div class=\"debug\">\r" +
    "\n" +
    "\t<div class=\"debug__back\">\r" +
    "\n" +
    "\t\t<button class=\"debug__back__btn\" onclick=\"location.href = '/'\">Back</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"debug__uploader\">\r" +
    "\n" +
    "\t\t<ext-upload class=\"debug__uploader__btn\" upload-callback=\"vm.contentOptions.uploadCards\" label=\"'Upload Cards'\"></ext-upload>\r" +
    "\n" +
    "\t\t<ext-upload class=\"debug__uploader__btn\" upload-callback=\"vm.contentOptions.uploadSankey\" label=\"'Upload Sankey'\"></ext-upload>\r" +
    "\n" +
    "\t\t<ext-upload class=\"debug__uploader__btn\" upload-callback=\"vm.contentOptions.uploadHistogram\" label=\"'Upload Histogram'\"></ext-upload>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/ext.sankey.modules/ext-page-sankey/templates/ext-page-sankey.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<div ext-options-sankey options=\"vm.contentOptions\" filters=\"vm.filters\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__cards\" ext-cards=\"vm.cardsOptions\" content-options=\"vm.contentOptions\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div class=\"core-diagram\" ext-sankey=\"{}\" sankey-data=\"vm.sankeyData\"></div>\r" +
    "\n" +
    "\t\t\t<div ext-overlay>\r" +
    "\n" +
    "\t\t\t\t<div class=\"histogram-content\" ext-histogram histogram-data=\"vm.histogramData\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
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


  $templateCache.put('/src/app/ext.sankey.modules/ext-sankey/templates/ext-sankey.html',
    "<p id=\"chart\" ext-max-heighter>\r" +
    "\n"
  );


  $templateCache.put('/src/app/ext.sankey.modules/kx-nav-bar/templates/kx-nav-bar.html',
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
    "\t\t\t\t\t\t\t\t\t<h4 ng-if=\"subNode.nodes\">{{subNode.name}}</h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul ng-if=\"subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<li ng-repeat=\"path in subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a>{{path.name}}</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul ng-if=\"!subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a>{{subNode.name}}</a>\r" +
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
    "\t\t\t\t\t\t\t<li><a href=\"\">{{::\"Account\"}}</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"\">{{::\"Logout\"}}</a></li>\r" +
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

}]);
