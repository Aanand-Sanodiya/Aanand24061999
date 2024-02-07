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

	// Check screen size on window resize
	$(window).resize(function () {
		if ($(window).width() > 991) {
			// If window width is greater than 991px (desktop view), add the 'show' class to ul.nav
			$("ul.nav").addClass("show");
		} else {
			// If window width is 991px or less (mobile view), remove the 'show' class from ul.nav
			$("ul.nav").removeClass("show");
		}
	});
});

