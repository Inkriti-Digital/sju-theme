URL = 'http://' + location.host;
var scrolled = false;
$.slidebars();
$(document).ready(function($){

  hashchanged();

 $(window).on('hashchange', function() {
   hashchanged();
 });



  function hashchanged(){
    var hash =  window.location.hash;
    var arr = hash.split('#');
    if (arr[1]) {
      var post_link = URL + '/magis/' + arr[1] + '/';
      renderPage(post_link);

    }else{
      $('#video').hide();
      $('#video').html('');
      $('#home').fadeIn('slow');

    }
    $('body').removeClass('hide');
    return false;
  }

  /*reguler */
  $('#fade').list_ticker({
    speed:4000,
    effect:'fade'
  });

  $('#fade').removeClass('hide');

  /* ------ main navigation ------------ */
  
 //site content load
 $('#video').hide();


 $(document).on('click', '.navigate-home', function(e){ 
  $('#video').hide();
  $('#video').html('');
  $('#home').fadeIn('slow');
  window.location.hash = "";  
  return false;
});

 $(document).on('click', '.grid-block, #navigation ul.sidenavright > li a', function(e){ 
   var post = $(this).data('post');
  if(post) {
  var post_link = $(this).data('rel');
  window.location.hash = '#' + post ;
  renderPage(post_link);
  return false;
  }
  else{
    $('.sb-close').trigger('click');
    return false;
  }

});


 function renderPage(post_link) {
  $('#home').hide();
  console.log(post_link);
  $("#video").load(post_link);
  setTimeout(function(){
      $('#video').fadeIn('slow');
      var viewportHeight = $(window).height();
      $('#videoWrap , .hero-img').css("height", viewportHeight);
      
//Code remove as Justin updated new code for video 
  }, 500);

// code to make all boxes in equal heights in detail page
  setTimeout(function(){
     //Equal heights
    //matching heights
    $('.equalizer').each(function(){
      var highestBox = 0;

      $('.equalizer').find('.column').each(function(){

        if($(this).height() > highestBox){
          highestBox = $(this).height();
          console.log(highestBox);
        }
      })
      $('.equalizer').find('.column').height(highestBox);
    });

 
  }, 2000);

  // $('#gallery .carousel-inner:first-child').addClass('active');


  $(document).on('click', '.home', function(e){  
    e.preventDefault();
    $('#video').hide();
    $('#home').fadeIn('slow');
  });

    //video blocks plus carousel
    //$('#gallery').hide();
    // $(document).on('click', '.hover-block', function(){ 
    //   $('#gallery').carousel().fadeIn('slow');$('#video-blocks').fadeOut('fast');
    //   return false;
    // });


    $(document).on('click', '#close-slider', function(){ 
      $('#gallery').carousel('pause').hide();$('#video-blocks').fadeIn('slow');
       $('#scroll-nav').show();
    })


    $(document).on('click', '.play-btn', function(){ 

      $('#vidFrame').show();
      $('.hero-container').show();
      $('.cover').show();
      $('.close-vid').show();

      console.log("play clicked");
    });

    $(document).on('click', '.close-vid', function(){
      $('.cover').hide();
      $('.close-vid').hide();
      $('#vidFrame').hide();
      console.log("close clicked");
    }); 


    // append close button plus close video.
    
    $(document).on('click', '#close-video', function(){ 
      oldSrc = $('#video-frame').data('src');
      $('#vidFrame').attr('src', '');
      // $('#video-frame').attr('src', oldSrc);
      $('#close-video').addClass('hide');
      $('.hero-container').fadeIn('slow'); return false;
      

    });


    //scroll to top
    $(document).on('click', '#scrollTop', function() {       
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    //real world experiences
    // $(document).on('click', 'a[href^="#"]', function() { 
    //   var target = $( $(this).attr('href'));

    //   if( target.length ) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //       scrollTop: target.offset().top
    //     }, 1000);
    //   }
    // });

    $(document).off('click', '#scroll-content').on('click', '#scroll-content', function(e) { 
      if(scrolled == false) {
      $('html, body').animate({
          scrollTop: $("#video-blocks").offset().top
      }, 1000);
      scrolled = true;
      }
      e.preventDefault();
    });


    // video description | show full content on hover
    $(document).on('mouseover', '.video-descp', function() { 
      $(this).animate({bottom:0}, 'slow');
      console.log("descript hover");
      $('.play-btn').animate({marginTop: "-100px"}, 'slow');
      return false;
      
    });
 
    //carousel
    $(document).on('click', '.trigger-carousel', function() { 
      slide = $(this).data('imgslide');
      console.log(slide);
     $("#gallery").carousel(slide);
     $('#gallery').fadeIn('slow');$('#video-blocks').fadeOut('fast');
     $('#scroll-nav').hide();
     return false;

   });
 
  }
 
});



$('#slide').list_ticker({
  speed:2000,
  effect:'slide'
});


$(document).on('click', '.sidebar-toggle-right', function() {
  
  jQuery('.inner-sidebar').show();
});

$(document).on('click', '.sb-close', function() {

  jQuery('.inner-sidebar').hide();
});

//Code for Fixed Nav 
var scrollNavP = $('body');


$(window).scroll(function() {

 // var navLock = ;

 
 if(scrollNavP.scrollTop() > jQuery('.hero-container').height() -jQuery('#scroll-nav').height()){
  jQuery('#scroll-nav').addClass('lock-nav');
    // console.log("over 700");
  } else{
    jQuery('#scroll-nav').removeClass('lock-nav');
    scrolled = false;
  }
  // console.log(scrollNavP.scrollTop() );
});


$(window).on('resize', function() {
    jQuery('.equalizer').each(function(){
      var highestBox = 0;

      jQuery('.equalizer').find('.column').each(function(){

        if(jQuery(this).height() > highestBox){
          highestBox = jQuery(this).height();
          console.log(highestBox);
        }
      })
      jQuery('.equalizer').find('.column').height(highestBox);
    });
});


 jQuery('.twitterpopup').click(function(event) {
    var width  = 575,
        height = 400,
        left   = (jQuery(window).width()  - width)  / 2,
        top    = (jQuery(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;
  });




 //JK edits - mobile nav

 $(document).on('click', '.sb-toggle-right', function() {
  
  jQuery('.inner-sidebar').show();
});

$(document).on('click', '.sb-close', function() {

  jQuery('.inner-sidebar').hide();
});