$(document).ready(function(){

	// megamenu and single dropdown for desktop device
	$(function(){
		  if ($(window).width() > 992 ){
			$(".navbar-nav .dropdown_megamenu").hover(function(){
				$(".list_megamenu").toggleClass('list_megamenu_active')
			});
			$(".navbar-nav .dropdown").hover(function(){
				$(".list_singledropdown").toggleClass('list_singledropdown_active')
			});
		}
	});

	// megamenu and single dropdown for tablet and mobile device
	$(function(){
		if ($(window).width() < 991 ){
			$(".navbar-nav .dropdown_megamenu").click(function(){
				$(".list_megamenu").slideToggle(500)
				$(".icon_arrow").toggleClass('icon_arrow_active')
			});
			$(".navbar-nav .dropdown").click(function(){
				$(".list_singledropdown").slideToggle(500)
				$(".icon_arrow").toggleClass('icon_arrow_active')
			});
		}
	})
	// SLIDESHOW 
    $(function() {
	  // Owl Carousel
	  var owl = $(".owl-carousel");
	  owl.owlCarousel({
	      nav: true,
	      loop:false,
	      dots: true,
	      pagination: false,
	      margin: 10,
	      autoHeight: false,
	      stagePadding: 50,
	      autoplay:true,
    	   autoplayTimeout:1000,
	      responsive:{
	        0:{
	          items: 1,
	          stagePadding: 0,
	          margin: 30,
	          nav:false
	        },
	        767:{
	          items: 2,
	          stagePadding: 25,
	          nav:false
	        },
	        1199:{
	          items: 4,
	        },
	        1500:{
	          items: 4,
	        }
	      }
	  });
	});

	//  AUTO UPDATING COPYRIGHT YEAR 
	$(function(){
		// Create a new function called newDate()
		function newDate() {
		  //return a new Date() -- returns the current calendar year.
		  return new Date().getFullYear();
		}
		// after everything else has loaded on the page, load this command: find the element (like a <span>) with the ID of 'autoupdate' and insert the dash '-' and the result of the newDate() function that returns the current calendar year.  (ie. '-2017' or whatever the current calendar year is)
		document.onload = document.getElementById("autodate").innerHTML = newDate();
	});
})