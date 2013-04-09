
var sliderTimer;

$(document).ready(function() {
	initSlider();
	arrowSlider();
	rightarrow();
});

function initSlider() {
	var slider = $("#slider-header");
	if (slider.length > 0) {
		var list = slider.children("ul");
		var slides = list.children("li");

		// Calculate and set starting position
		var slideWidth = slides.first().width();
		var listWidth = slides.size() * slideWidth;
		var startOffset = (listWidth - $(window).width());

		startOffset = 0;
		list.css("left", -1 * startOffset);

		// Start the timer
		sliderTimer = setInterval(function() {
			var leftIndent = parseInt(list.css("left")) - slideWidth;
			
			list.animate(
				{ left: leftIndent }, 
				{ duration: 800, easing: "swing", queue: true, complete: function() { 
					var list = $(this);
					list.children("li").first().appendTo(list);
					list.css("left", -1 * startOffset); 
				} 
				}
			);
		}, 4000);
	}
}


function arrowSlider() {
	$(".left-arrow").click(function() {
		if ($(".content-slider ul").is(":animated")) {
			return false;
		}
		
		var leftPosition = parseInt($(".content-slider ul").css("left"));
		console.log(leftPosition);
		
		if (leftPosition < 0)
			$(".content-slider ul").animate({ left: "+=199" }, { duration: 500, easing: "swing"});
	 });
};


function rightarrow() {
	$(".right-arrow").click(function() {
		if ($(".content-slider ul").is(":animated")) {
			return false;
		}

		var leftPosition = Math.abs(parseInt($(".content-slider ul").css("left")));
		console.log(leftPosition);

		var lijevi = $(".content-slider ul li");
		var brojLi = lijevi.length;
		var sirinaLija = lijevi.first().width();

		if (leftPosition < Math.floor(brojLi / 2) * sirinaLija)
			$(".content-slider ul").animate({ left: "-=199" }, { duration: 500, easing: "swing"});
	});
};
