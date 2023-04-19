$(function () {
	$(function () {
		var icons = {
			header: 'ui-icon-plus',
			activeHeader: 'ui-icon-closethick',
		};
		$('#accordion').accordion({
			icons: icons,
		});
		$('#toggle').on('click', function () {
			if ($('#accordion').accordion('option', 'icons')) {
				$('#accordion').accordion('option', 'icons', null);
			} else {
				$('#accordion').accordion('option', 'icons', icons);
			}
		});
	});
});
$(document).ready(function () {
	$('.icons-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 4,
		autoplay: false,
		dots: true,
		arrows: false,
	});
});

$(document).ready(function () {
	$('.testi-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 2000,
	});
});
