"use strict";

var $ = jQuery.noConflict();

$(function () {
    var headerHgt = $('header nav').height();
    var windowHgt = $(window).height();
    var mainSlideHgt = windowHgt - headerHgt;
    var windowWidth = $(window).width();
    var largeDis = windowWidth > 768?true:false;

    if (windowWidth > 768) {
        $(".itemDetails .mainBtn").mouseover(function () {
            $(this).closest('.servicesItem').find('.imgOverlay').css("opacity", "1");
        }).mouseout(function () {
            $(this).closest('.servicesItem').find('.imgOverlay').css("opacity", "0");
        });
    }

    if (windowWidth <= 768) {
        $('.locationByCharacter .showMore').on('click', function (e) {            
            e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('.locationByCharacter').find('.locationAddress');
            $collapse.addClass("active");
            $collapse.slideDown("slow");
            $this.hide();
        });
        $('.locationByCharacter .showLess').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('.locationByCharacter').find('.locationAddress');
            $collapse.removeClass("active");
            $collapse.slideUp("slow", function () {
                var $showMore = $this.closest('.locationByCharacter').find('.showMore');
                $showMore.show();
            });

        });
    }

    var lanBar = document.getElementById('languages');

    showRight.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(lanBar, 'cbp-spmenu-open');
    };
    // hideRight.onclick = function () {
    //     classie.removeClass(lanBar, 'cbp-spmenu-open');
    // };

    $('.mainCarousel').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        dots: true,
        arrows: false,
        pauseOnHover: false // added on 11-01-2016        
    });

    //    slick carousel
    $('.businessCarousel').slick({
        centerMode: true,
//        autoplay: true,
        centerPadding: '300px',
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 361,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    adaptiveHeight: true
                }
            }
        ]
    });

//    publication carousel
    $('.publicationCarousel').slick({
        centerMode: true,
//        autoplay: true,
        centerPadding: '300px',
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    // pReleaseBlock

    $('.evntCalendar').slick({
        centerMode: false,
//        autoplay: false,
        //centerPadding: '300px',
        //prevArrow:'prbEvnt',
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    //centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    //centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    $('.prbEvnt').click(function (e) {
        e.preventDefault();
        //$(".evntCalendar").slickPrev();
        $(".evntCalendar").slick('slickNext');
    });
    $('.dataDetailsSlider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '300px',
        arrows: true,
        asNavFor: '.dataTitleSlide',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '200px'
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '150px',
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    arrows: false,
                    dots: true                    
                }
            }
        ]
    });
    $('.dataTitleSlide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.dataDetailsSlider',
        focusOnSelect: true
    });
    $('.dataDetailsSlider').on('afterChange', function (event, slick, i) {
        $('.dataTitleSlide .slick-slide').removeClass('slick-current');
        $('.dataTitleSlide .slick-slide').eq(i).addClass('slick-current');
    });

// remember document ready on this
    $('.dataTitleSlide .slick-slide').eq(0).addClass('slick-current');


    $('.assetsCarousel').slick({
//        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
//corporate brochure carousel
    $('.corporateBrochureCarousel').slick({
//        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.eBookCarousel').slick({
        centerMode: true,
//        autoplay: true,
        centerPadding: '300px',
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.caseStudiesCarousel').slick({
        centerMode: true,
//        autoplay: true,
        centerPadding: '300px',
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.carouselLatestVancancy').slick({
        centerMode: true,
//        autoplay: true,
        centerPadding: '250px',
        slidesToShow: 1,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    variableWidth: false
                }
            }
        ]
    });

    $('.globalConsolidationCarousel').slick({
        centerMode: true,
//        autoplay: true,
        centerPadding: '300px',
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    $('.videoTestimonialCarousel').slick({
        centerMode: true,
//        autoplay: true,
        centerPadding: '350px',
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
//                    centerPadding: '150px',
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    // hook into Bootstrap shown event and manually trigger 'resize' event so that Slick recalculates the widths
//    $('.tabList').on('shown.bs.tab', function (e) {
//        $('.businessCarousel').resize();
//    });
//    $('.tabList > li').on('shown.bs.modal', function (e) {
//        $('.businessCarousel').resize();
//        $('.caseStudiesCarousel').resize();
//    });


    $('.mainCarousel .slick-slide').css('height', mainSlideHgt);
//    $('.pageBanner').css('height', mainSlideHgt);


    $(".returnTop").click(function () {
        $('html, body').animate({
            scrollTop: $(".searchByCharacter").offset().top - headerHgt + 30
        }, 1000);
    });

    //Overlay data on image
    if(largeDis){
	    $('.overlayBox').mouseenter(function () {
	        var overlayBox = $(this);
	        if (!overlayBox.hasClass('animating')) {
	            overlayBox.addClass('animating');
	            var title = $(this).find('> h2');
	            var overlayContent = $(this).find('.blockOverlay');
	            title.animate({'top': '55px'}, 400, function () {
	                //		alert('cool')	  ;
	                overlayContent.fadeIn();
	                overlayBox.removeClass('animating');
	            });
	        }
	    }).mouseleave(function () {
	        var overlayBox = $(this);
	        if (!overlayBox.hasClass('animating')) {
	            overlayBox.addClass('animating');
	            var title = $(this).find('> h2');
	            var overlayContent = $(this).find('.blockOverlay');
	
	            overlayContent.fadeOut(400, function () {
	                title.show().animate({'top': '50%'});
	                overlayBox.removeClass('animating');
	            });
	        }
	
	        //title.show().animate({ 'top': '50%'});
	    });
	 }else{
		 //link the title
		 $('.overlayBox').each(function(){
			 var title = $(this).find('> h2');
			 $(this).removeClass('active');
			 var detailPageLink =  $(this).find('a.btn');
			 var loc = detailPageLink.attr('href');
			 
			 if(detailPageLink) title.html('<a href="'+ loc +'">'+title.text()+'</a>');
			 
			 $(this).on('click', function(){
				window.location  = loc;
			 });
		 });
	 }   

    // emergency travels modal activator

    $('.modal_activator').on('click','a', function(e){
        e.preventDefault();
        var modal_id = $(this).attr('href');
        $(modal_id).modal();
    });

    


    new WOW().init();
});

$(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        //console.log(scrollTop);
        $('header nav.navbar').addClass('sticky');
    } else {
        $('header nav.navbar').removeClass('sticky');
    }
});


// activate country by its name
function activate_country(country) {
    // remove all active class    
    $(".country").each(function(){
        if(RegExp('(\\s|^)disabled(\\s|$)').test(this.getAttribute('class'))){            
            $(this).attr("class", "country disabled");
        }else{
            $(this).attr("class", "country");
        }
    });
    // find country by name 
    var country_obj = findCountryByName(country);
    //console.log(country_obj);
    if (country_obj) {
        $('#' + country_obj.region_code).attr("class", "country active");
    }

}

// redirect to urls  
function redirect_to_country(country) {
    // find country by name 
    var country_obj = findCountryByName(country);
    if (country_obj.url) {
        window.location.href = country_obj.url;
        //$('#'+ country_obj.region_code).attr("class", "country active");
    }

}

// find country on json by its name and return its region code
function findCountryByName(country) {
    for (var i = 0; i < regions.length; i++)
    {
        if (regions[i].region_name == country)
        {
            return regions[i];
        }
    }
}

// svg maps code 
$(function () {
    if (typeof regions !== 'undefined') {
        for (var i = 0; i < regions.length; i++) {
            $('#' + regions[i].region_code).data('region', regions[i]);
            $('#' + regions[i].region_code).attr("class", "country " + regions[i].has_detail);
        }

        $('.customSvgMap g.country').mouseover(function (e) {
            var region_data = $(this).data('region');
            if (region_data) {
                $('<div class="info_panel">' +
                        region_data.region_name +
                        '</div>'
                        )
                        .appendTo('body');
            }
        })
                .mouseleave(function () {
                    $('.info_panel').remove();
                })
                .mousemove(function (e) {
                    var mouseX = e.pageX, //X coordinates of mouse
                            mouseY = e.pageY; //Y coordinates of mouse

                    $('.info_panel').css({
                        top: mouseY + 10,
                        left: mouseX + ($('.info_panel').width() / 4)
                    });
                });

        $('.customSvgMap g.country').on('click', function (e) {
            var region_data = $(this).data('region');
            console.log(region_data);
            if (region_data) {
            	
            	var loc_url = region_data.url;
            	
/*
            	if(typeof lang_code != 'undefined' && lang_code!==''){
	            	loc_url = loc_url.replace('/countries', '/'+lang_code+'/countries');
					//console.log(loc_url);
            	}            	
*/
            	
                window.location.href = loc_url;
            }
        });
    }
});

// location a-z pages mobile on scroll to
function scrollToLoc(current){
    //console.log(current.options[current.selectedIndex].value);
    var to_container = current.options[current.selectedIndex].value;
    $('html,body').animate({scrollTop: $(to_container).offset().top - 90}, 1000);

}

// location a-z pages on scroll to
$(function () {
    $('body').on('click','.scroll_trigger', function(e){
        e.preventDefault();
        //console.log(this);
        var to_container = $(this).attr('href');
        $('html,body').animate({scrollTop: $(to_container).offset().top - 130}, 1000);
    });
    // $('body').on('click','.subElementList ul.list-inline a', function(e){
    //     e.preventDefault();
    //     //console.log(this);
    //     var to_container = $(this).attr('href');
    //     $('html,body').animate({scrollTop: $(to_container).offset().top - 60}, 1000);
    // });
    $('body').on('click','.subElementList ul.list-inline a', function(e){
    	
    	if($(this).parent().hasClass('defaultPage')){
    		//console.log('blabla');
    		return true;
    	}
            e.preventDefault();

            var to_container = $(this).attr('href');
            $('html,body').animate({scrollTop: $(to_container).offset().top - 60}, 1000);

    });
    

    
    //fix cookie page link on multi lingual site cookie banner
    $('#cn-notice-text').find('a').attr('href', $('#cn-more-info').attr('href') );
});

//set top margin for header
$(window).bind("load", function() {
   $('.mainContent').css('margin-top', $('header nav').height());
   

    //if url has a hash
    if(window.location.hash) {
    	var to_container = window.location.hash;
//    	console.log(to_container);
    	$('html,body').animate({scrollTop: $(to_container).offset().top - 60}, 1000);
    }
       
});
