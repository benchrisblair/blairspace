$(document).ready(function() {
	// Enables functionality of mobile dropdown
	$(document).on("click", ".navbar-toggle", function(event) {
		event.preventDefault();

		var $this = $(this);
		var $navbar = $this.parents(".navbar");
		var $dropdown = $navbar.find(".navbar-dropdown");

		$dropdown.toggleClass( "active" );
	});

	// Enables scrollTo effect
	$(document).on("click", ".navbar-nav a", function(event) {
		event.preventDefault();

		var $this = $(this);
		var target = $this.attr("href");
		var destination = $("#" + target).offset().top;

		$("body, html").animate({
			scrollTop: destination
		}, 1000, "easeInOutCubic");
	});
});
