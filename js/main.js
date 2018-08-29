/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : Agency 
Author          : Ashok Prajapati
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - Khaled mohamed
========================================================================*/


 /* =============================================
    Smooth Scroll
    ============================================= */

$(function (){ 
    'use strict';
    $(window).scroll(function (){
        var navbar =$('.navbar');
        if($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }     
    });
    $('.collapse .nav-item').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
     
     $('.navbar li a').click(function (e) {
  
          e.preventDefault();
  
          $('html, body').animate({
              scrollTop: $('#'+ $(this).data('scroll')).offset().top +1 
          }, 1000);
          
           });
     
     $('.navbar li a').click(function (){
         $(this).addClass('active').parent().siblings().find('a').removeClass('active');
     });
     //  start Navbar scrllTop //
      
    
     $("html").niceScroll({
        cursorcolor: "#331a53",
        cursorwidth: "8px"
    });  
      
      
     
     
     
     
     var winH    =$(window).height(),
       upperrH =$('.upper-bar').innerHeight(),
       navH    =$('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperrH + navH ));
    
    $('.collapse .nav-item').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // Featured Work Shuffle 
    $('.featured-work ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.09');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
     
     
     
     
     
     
     
     $(window).scroll(function(){
         
         $('.block').each(function(){
            
            if ($(window).scrollTop()> $(this).offset().top){
            
                var blockID = $(this).attr('id');
                
               $('.navbar a').removeClass('active'); 
             $('.navbar li a[data-scroll="' +blockID+ '"]').addClass('active');
                
            }
        });
         
            
       if($(window).scrollTop() >= 1500){
           
          $('.scroll-to-top').fadeIn(500); 
           
       } else{
           
           $('.scroll-to-top').fadeOut(500);  
       } 
             
        
    });
    
    $('.scroll-to-top').click(function (event){
        
        
        event.preventDefault();
        
        $('html, body').animate({
            
            scrollTop:0
            
        },1000);
    });
     
 }); 

 var isDone = false;
    
        $(window).scroll(function() {
            
            if( ! isDone && $(window).scrollTop() >= 1000 ) {
               
           $(".count").countTo({});
               
             isDone = true;  
        
            }
        });     

        $(window).load(function(){
        $("body").css("overflow","auto");
        $(".loading-overlay .spinner").fadeOut(3000,function(){
            $(this).parent().fadeOut(3000);
        });
    });

   

     


    