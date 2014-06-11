//On Load
$(function() {
	$('.status').hover(function(){
		console.log("Hovered");
		$(this).toggleClass("hover");
	});
});

