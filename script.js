/*
$(function ()
  {

		'use strict';
		// make nice scroll 
		 //$("html").niceScroll();
     $("html").niceScroll({
			cursorcolor:"red",
			cursorwidth:"24px",
			background:"rgba(20,20,20,0.3)",
			cursorborder:"1px solid red",
			cursorborderradius:0
		  }); 
  });
*/
$(document).ready(function(){
  
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  
  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
/*
$('.example1').typeIt({
  strings: 'This is a simple string.',
  speed: 150,
  autoStart: false,
  breakDelay: 1500,
  startDelay: 1000
});
$(".ah").delay(22000).fadeIn(4000);*/