(function($) {
	"use strict";
	$.fn.unwrapper = function(id) {
	var ea="";
		$(id+" [role=presentation]").each(function( index, element){
			if($(this).hasClass('dropdown')){

			}else if($(this).hasClass('active')) {
				ea += '<li role="presentation" class="active">' + $(this).html() + '</li>';
			}else{
				ea += '<li role="presentation">' + $(this).html() + '</li>';
			}

		})
		$(id).empty();
		$(id).html(ea);
		console.log(ea);

	}

	$.fn.responsivetab = function(param) {
		var id= this.selector;
		var text = param.text;
		$.fn.unwrapper(id);
		var totalwidth=$(id).width();
		var count = $(id).children().length;
		var width = 0;

		for (var i = 0; i <= count; i++) {
			width +=$(""+id+" li:nth-child("+i+")").width();
			if(width+130>totalwidth){
				$(""+id+" li").slice(i-1,count).wrapAll('<li role="presentation" class="dropdown"><ul class="dropdown-menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents"></ul></li>');
				$(""+id+" .dropdown").prepend('<a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents" aria-expanded="true">'+text+' <span class="caret"></span></a>');
				return;
			}
		}

	}




})(jQuery);

