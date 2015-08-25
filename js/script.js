$(document).ready(function() {
	$(document).on("click", ".navbar-toggle", function(event) {
		event.preventDefault();

		var $this = $(this);
		var $navbar = $this.parents(".navbar");
		var $dropdown = $navbar.find(".navbar-dropdown");

		$this.toggleClass( "active" );
		$dropdown.toggleClass( "active" );

		console.log("test");
	});
});