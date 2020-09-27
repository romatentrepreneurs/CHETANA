; (function ($) {
    "use strict"
    var nav_offset_top = $('.header_area').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
    -------------------------------------------------------------------------------*/
	function myFunction() {
  		var dots = document.getElementById("dots");
  		var moreText = document.getElementById("more");
 	        var btnText = document.getElementById("myBtn");
		
 		 if (dots.style.display === "none") {
  	 		 dots.style.display = "inline";
   			 btnText.innerHTML = "Read more";
  			 moreText.style.display = "none";
 		 } 
		else {
 		   	dots.style.display = "none";
 		   	btnText.innerHTML = "Read less";
   		        moreText.style.display = "inline";
  		}
	}

	
	
	
	
	
	
	
    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


    //--------  Carousel --------// 
    if ($('#our-major-cause').length) {
        $('#our-major-cause').owlCarousel({
            loop: true,
            margin: 30,
            items: 3,
            nav: false,
            dots: true,
            responsiveClass: true,
            // autoplay: 2500,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1224: {
                    items: 3
                }
            }
        })
    }

    if ($('.clients_slider').length) {
        $('.clients_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: false,
            responsiveClass: true,
            autoplay: 2500,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },
                1224: {
                    items: 5
                }
            }
        })
    }

    //------- Mailchimp js --------//  

    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


    $('select').niceSelect();

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    // Partner Map
    if (document.getElementById('mapBox')) {
        var map = new google.maps.Map(document.getElementById('mapBox'), {
            zoom: 12,
            center: new google.maps.LatLng(9.7805230,  76.6038510),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker;
        marker = new google.maps.Marker({
            map: map
        });
    }

})(jQuery)
