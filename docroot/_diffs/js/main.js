AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
		// console.log(window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('background-color'));
		// console.log(window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('color'));

		var backgroundColor = window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('background-color');
		var textColor = window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('color');

		// document.getElementsByClassName("site-navigation-bar")[0].style.background = "rgba(255, 255, 255, 1)";
		// document.querySelectorAll(".navigation-section nav ul li a").style.color = "rgba(34, 33, 33, 1)";

		var navOffset = $(".navigation-bar").offset().top;

		$(document).scroll(function() {
			if($(this).scrollTop() > navOffset)
			{
				$(".site-navigation-bar").addClass("scrolled");
				$(".navigation-section a").addClass("scrolled-text");
				$("h1.site-title").addClass("scrolled-text");
			}
			else
			{
				$(".site-navigation-bar").removeClass("scrolled");
				$(".navigation-section a").removeClass("scrolled-text");
				$("h1.site-title").removeClass("scrolled-text");
			}
		});


	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}
);
