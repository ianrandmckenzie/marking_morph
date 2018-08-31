$(document).ready(function(){
	var morpheusConfig = {
		duration: 1000,
		rotation: 'none'
	};

	var bookmarkIcon = new SVGMorpheus('#svg-icon-bookmark-icon', morpheusConfig);

	$('.chapter-toggle').click(function() {

		$(this).toggleClass('toggle-on');
		
		if ($(this).hasClass('toggle-on')) {
			bookmarkIcon.to('svg-icon-bookmark-close');
		} else {
			bookmarkIcon.to('svg-icon-bookmark');
		}
	});
});