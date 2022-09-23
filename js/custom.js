$(document).ready(function(){
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