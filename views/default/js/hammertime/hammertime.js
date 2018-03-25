define(['elgg', 'jquery', 'jquery.hammer'], function (elgg, $, Hammer) {

	function init() {
		$('.elgg-pagination').parent().hammer().on('swiperight', function(event) {
			var previous_link = $('.elgg-pagination li:first-child a').attr('href');
			if (previous_link) {
				window.location.href = previous_link;
			}
		});

		$('.elgg-pagination').parent().hammer().on('swipeleft', function() {
			var next_link = $('.elgg-pagination li:last-child a').attr('href');
			if (next_link) {
				window.location.href = next_link;
			}
		});

		$('ul.tidypics-album-nav').parent().parent().hammer().on('swiperight', function(event) {
			var previous_link = $('.tidypics-album-nav li:first-child a').attr('href');
			if (previous_link) {
				window.location.href = previous_link;
			}
		});

		$('ul.tidypics-album-nav').parent().parent().hammer().on('swipeleft', function() {
			var next_link = $('.tidypics-album-nav li:last-child a').attr('href');
			if (next_link) {
				window.location.href = next_link;
			}
		});
	}

	init();
});
