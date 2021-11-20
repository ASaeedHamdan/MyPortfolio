/*global $, consol*/
$(window).ready(function () {
    "use strict";
    
     // smooth scroll
    $(".links li a").on("click", function () {
        $("html , body").animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1200);
    });
    
    //active class in links navbar
    $(".header_site .nav_site li a").on("click", function () {
        $(".header_site .nav_site li a").removeClass("active");
        $(this).addClass("active");
    });
    
    // read more button
    $(".header_content button").on("click", function () {
        $("html,body").animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    

    //text typing animation //
    $('.example1').typeIt({
        strings: 'This is a simple string.',
        speed: 200,
        autoStart: false,
        breakDelay: 1000,
        startDelay: 1000
    });
    $(".ah").delay(26500).fadeIn(6000);
    
    //work item animate hover
    $(".our-work .galary .img-item").hover(function () {
        $(this).children().first().fadeIn(800);
    }, function () {
        $(this).children().first().fadeOut(800);
    });
    
    // fire the filter works plugin
    var mixer = mixitup('#container');
    
    //add class active in works link
    $(".work-ul li").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
   
    
});

// ************ loading page ********* //
$(window).on("load", function () {
    'use strict';
    $(".loading-overlay .spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(1000);
            
    });
});