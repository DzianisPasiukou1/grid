jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(this.parent()).height() - $(this).outerHeight()) / 2) +
                                                $(this.parent()).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(this.parent()).width() - $(this).outerWidth()) / 2) +
                                                $(this.parent()).scrollLeft()) + "px");
	this.css("z-index", 10000);
	return this;
}