(
	function($) {
		$(document).ready(
			function() {
				$('#cssmenu').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>');
			}
		);
	}
)(jQuery);

function openHighRes(image) {
	if (image == 1) {
		src = "images/screenshot1.png";
	} else if (image == 2) {
		src = "images/screenshot2.png";
	} else if (image == 3) {
		src = "images/screenshot3.png";
	} else if (image == 4) {
		src = "images/screenshot4.png";
	} else if (image == 5) {
		src = "images/screenshot5.png";
	} else if (image == 6) {
		src = "images/screenshot6.png";
	} else if (image == 7) {
		src = "images/screenshot7.png";
	} else if (image == 8) {
		src = "images/screenshot8.png";
	} else if (image == 9) {
		src = "images/screenshot9.png";
	}
	window.location.href = src;
}

function addScrollMargin() {
    window.scrollTo(0, window.pageYOffset - 400);
}

window.addEventListener('hashchange', addScrollMargin);