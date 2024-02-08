// $(document).ready(function () {
// 	$(".navbar .nav-link").on("click", function (event) {
// 		if (this.hash !== "") {
// 			event.preventDefault();

// 			var hash = this.hash;

// 			$("html, body").animate(
// 				{
// 					scrollTop: $(hash).offset().top,
// 				},
// 				700,
// 				function () {
// 					window.location.hash = hash;
// 				}
// 			);
// 		}
// 	});
// });

// // navbar toggle
// $("#nav-toggle").click(function () {
// 	$(this).toggleClass("is-active");
// 	$("ul.nav").toggleClass("show");
// });
$(document).ready(function () {
	// Function to handle window resize
	function handleResize() {
		if ($(window).width() > 991) {
			$("ul.nav").addClass("show");
		} else {
			$("ul.nav").removeClass("show");
		}
	}

	// Call handleResize on document ready
	handleResize();

	// Call handleResize on window resize
	$(window).resize(handleResize);
});

$(document).ready(function () {
	// Smooth scrolling for navigation links
	$(".navbar .nav-link").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				700,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});

	// Navbar toggle for mobile view
	$("#nav-toggle").click(function () {
		$(this).toggleClass("is-active");
		$("ul.nav").toggleClass("show");
	});
});

