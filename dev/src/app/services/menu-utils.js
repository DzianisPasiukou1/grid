angular.module('gridTaskApp')
	.factory('menuUtils', [function(){
		return {
			register: function(opt){
				if (!Number.isFinite(opt.countBlockLastColumn)){
					opt.countBlockLastColumn = 1;
				}
				
				if (!Number.isFinite(opt.countBlockFirstColumn)){
					opt.countBlockFirstColumn = 1;
				}
				
				this.colCache = [];
				this.opt = opt;
				
				this.__calcAllWidth();
				this._pushValues();
			},
			destroy: function(){
			},
			getColCache: function(){
				return this.colCache;
			},
			getColumns: function(){
				return this.columns;
			},
			getTotalWidth: function(isRecalc){
				if (isRecalc){
					this.__calcTotalWidth();
				}
				
				return this.totalWidth;
			},
			getVisibleWidth: function(isRecalc){
				if (isRecalc){
					this._calcVisibleWidth();
				}
				
				return this.visibleWidth;
			},
			refreshColumns: function(columns, opt){
				this.columns = columns;
				this.opt = opt;
				this.colCache = [];
				
				this.__calcAllWidth();
				this._pushValues();
			},
			toggleVisible: function(index){
				this.columns[index].toggleVisible();
			},
			toggleColumns: function(windowWidth){
				if (windowWidth < this.totalWidth){
					this._toBackFor(function(item, index){
						if (item.visible){
							this.toggleVisible(index);
							this.totalWidth -= item.minWidth;
							this.colCache.push({
								label: item.field,
								element: item
							});
						if (windowWidth > this.totalWidth){
								return;
							}
						}
					});
				}
				else{
					this._toNextFor(function(item, index){
						if (!item.visible){
							if (windowWidth > this.totalWidth + item.minWidth){
								this.toggleVisible(index);
								this.totalWidth += item.minWidth;
							
								angular.forEach(this.colCache, function(col, index){
									if (col.element == item){
										this.colCache.splice(index, 1);
									}
								});
							}
							else{
								return;
							}
						}
					});
				}
			},
			getIsMenu: function (){
				return this.colCache.length > 0 || this.opt.showResponsMenu;
			},
			_calcVisibleWidth: function(){
				this.visibleWidth = this.columns.reduce(function (a, b) {
						if (b.visible) {
							return a + b.minWidth;
						} else {
							return a;
						}
					}, 0);
			},
			_calcTotalWidth: function(){
				this.totalWidth = this.columns.reduce(
				function (a, b) {
							return a + b.minWidth;
						}, 0);
						
			},
			_calcAllWidth: function(){
				this._calcTotalWidth();
				this._calcVisibleWidth();
			},
			_pushValues: function(){
				this.opt.values = [];
				
				this.__toNextFor(function(item, index){
					this.opt.values.push({
						label: item.field,
						element: item,
						isVisible: item.visible
					});
				});
			},
			
			_toNextFor: function(func){
				for(var i = 0; i < this.columns.length; i++){
						if (typeof(func) === 'function'){
							func(this.columns[i], i);
						}
						else{
							throw new Error("Wrong function.");
						}
					}
			},
			_toBackFor:function(func){
				for(var i = this.columns.length - this.opt.countBlockLastColumn - 1; i > this.opt.countBlockFirstColumn; i--){
						if (typeof(func) === 'function'){
							func(this.columns[i], i);
						}
						else{
							throw new Error("Wrong function.");
						}
					}
			}
		}
	}]);
