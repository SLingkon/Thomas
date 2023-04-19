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
		slidesToScroll: 3,
		autoplay: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 2000,
	});
});
