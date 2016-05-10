(
	function($) {
		$(document).ready(
			function() {
				$('#cssmenu').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div><div id="bg-four"></div>');
				if (localStorage.pagecount) {
					localStorage.pagecount=Number(localStorage.pagecount) +1;
				} else {
					localStorage.pagecount=1;
				}
				document.getElementById("page-views").innerHTML = localStorage.pagecount + " site views.";
			}
		);
	}
)(jQuery);

function openHighRes(image) {
	window.location.href = "images/screenshot" + image + ".png";
}

function addScrollMargin() {
    window.scrollTo(0, window.pageYOffset - 400);
}

window.addEventListener('hashchange', addScrollMargin);

function init() {
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            //shrink
            
        } else {
            //expand

        }
    });
}
window.onload = init();