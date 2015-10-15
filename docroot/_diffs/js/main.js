AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
		// var backgroundColor = window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('background-color');
		// var textColor = window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('color');

		var navOffset = $(".navigation-bar").offset().top;

		// Changes the navigation bar color when not at top of page.
		$(document).scroll(function()
		{
			if($(this).scrollTop() > navOffset)
			{
				$(".site-navigation-bar").addClass("scrolled");
				$(".navigation-section a").addClass("scrolled-text");
				$(".title-section").addClass("scrolled-text");
				$(".site-navigation-bar .btn-login").addClass("scrolled-button");
				$(".menu-button").addClass("scrolled-menu");
			}
			else
			{
				$(".site-navigation-bar").removeClass("scrolled");
				$(".navigation-section a").removeClass("scrolled-text");
				$(".title-section").removeClass("scrolled-text");
				$(".site-navigation-bar .btn-login").removeClass("scrolled-button");
				$(".menu-button").removeClass("scrolled-menu");
			}
		});

		$(".menu-button").click(function()
		{
			$(this).toggleClass("opened");
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
