$(document).ready(function () {


	$('.navbar-toggler').on('click', function () {
		$('.offcanvas-wraper, .navbar-toggler').toggleClass('active')
	})


	$('.icons-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 4,
		autoplay: false,
		dots: true,
		arrows: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 445,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		],
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
