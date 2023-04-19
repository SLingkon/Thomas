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

// (Optional) Active an item if it has the class "is-active"
$('.dl_accordion > .dl_accordion_item.is-active')
	.children('.dl_accordion_panel')
	.slideDown();

$('.dl_accordion > .dl_accordion_item').on('click', function () {
	// Cancel the siblings
	$(this)
		.siblings('.dl_accordion_item')
		.removeClass('is-active')
		.children('.dl_accordion_panel')
		.slideUp();
	// Toggle the item
	$(this)
		.toggleClass('is-active')
		.children('.dl_accordion_panel')
		.slideToggle('ease-out');
});
