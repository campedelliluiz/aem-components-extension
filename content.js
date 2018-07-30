if ($('.component-wrapper').length) {
	$('.component-wrapper').each(function(index){
	    var componentName = $(this).children("div").attr("data-role"),
	    columnControl = '',
	    cmptName;

	    if ( $(this).children("div").hasClass("c-column-control") ) {
	      componentName = "column control";
	    }

	    if ( $(this).children("div").hasClass("c-html-injector__wrapper") ) {
	      componentName = "code snippet";
	    }

	    $(this).mouseenter(function() {
	        cmptName = componentName.replace(/-/g, " ");
	        if ( $(this).parents().hasClass("c-column-control") ) {
	          columnControl = "<br><span>(inside column control)</span>";
	        }
	        $(this).css('outline','3px solid rgba(0, 0, 0, .7)');
	        $(this).prepend('<div class="cmp-nm"><p>' + cmptName + columnControl + '</p></div>');
	    }).mouseleave(function() {
	        $(this).css('outline','none');
	        $(".cmp-nm").remove();
	    });
	});
} else {
	alert('This is not a Adobe Classic site');
}