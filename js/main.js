    /* ======================================
=================/ main.js /=====================
======================================= */

$(document).ready(function($){

  /* ------ main navigation ------------ */
  $.slidebars();





    //site content load
    $('#video').hide();
    $(document).on('click', '.grid-block', function(e){ 
      e.preventDefault();
      var post_link = $(this).data('rel');
      $("#video").load(post_link);
      setTimeout(function(){
        $('#home').hide();
        
        setTimeout(function(){
          $('#video').fadeIn('slow');
          var viewportHeight = $(window).height();

          $('#videoWrap , .hero-img').css("height", viewportHeight);
          $('#gallery').carousel('pause').hide();
// $('iframe').css('width', '0');
// $('iframe').css('height', '0') ;



(function ( window, document, undefined ) {
  /*  * Grab all iframes on the page or return  */
  var iframes = document.getElementsByTagName( 'iframe' );

  /* Loop through the iframes array */
  for ( var i = 0; i < iframes.length; i++ ) {

    var iframe = iframes[i],
    /* RegExp, extend this if you need more players */
    players = /www.youtube.com|player.vimeo.com/;

    /*
     * If the RegExp pattern exists within the current iframe
     */
     if ( iframe.src.search( players ) > 0 ) {

      /*
       * Calculate the video ratio based on the iframe's w/h dimensions
       */
       var videoRatio        = ( iframe.height / iframe.width ) * 100 - 10.65;

      /*
       * Replace the iframe's dimensions and position
       * the iframe absolute, this is the trick to emulate
       * the video ratio
       */
       iframe.style.position = 'absolute';
       iframe.style.top      = '0';
       iframe.style.left     = '0';
       iframe.width          = '100%';
       iframe.height         = '100%';

      /*
       * Wrap the iframe in a new <div> which uses a
       * dynamically fetched padding-top property based
       * on the video's w/h dimensions
       */
       var wrap              = document.createElement( 'div' );
       wrap.className        = 'fluid-vids';
       wrap.style.width      = '100%';
       wrap.style.position   = 'relative';
       paddingTop = videoRatio;
      // wrap.style.paddingTop = videoRatio + '%';

      /*
       * Add the iframe inside our newly created <div>
       */
       var iframeParent      = iframe.parentNode;
       iframeParent.insertBefore( wrap, iframe );
       wrap.appendChild( iframe );

     }

   }

 })( window, document );

  }, 300);
  }, 300);


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

 

  });

    $(document).on('click', '.home', function(e){  
      e.preventDefault();
      $('#video').hide();
      $('#home').fadeIn('slow');
    });

    //video blocks plus carousel
    //$('#gallery').hide();
    $(document).on('click', '.hover-block', function(){ 
      $('#gallery').carousel().fadeIn('slow');$('#video-blocks').fadeOut('fast');
      return false;
    });


    $(document).on('click', '#close-slider', function(){ 
      $('#gallery').carousel('pause').hide();$('#video-blocks').fadeIn('slow');})


    // responsive video
    $('.fluid-vids').hide();
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
   //  $(document).on('click', '.play-btn', function(){ 
   //   $('.hero-container').fadeOut('slow');
   //   // $('.fluid-vids #video-frame').attr('src', $('.fluid-vids #video-frame').data('src'));
   //  $("#video-frame")[0].src += "&autoplay=1";
   //   $('.fluid-vids').fadeIn('fast');
   //   $(".fluid-vids").animate({padding: "46.5% 0 0 0" });

   //   setTimeout(function(){
   //    $('#close-video').removeClass('hide');
   //   }, 1000);
     
   // });

    // append close button plus close video.
    
    $(document).on('click', '#close-video', function(){ 
      oldSrc = $('#video-frame').data('src');
        $('#video-frame').attr('src', '');
        $('#video-frame').attr('src', oldSrc);
      $('#close-video').addClass('hide');
      $('.fluid-vids').fadeOut('fast'); $('.hero-container').fadeIn('slow'); return false;
      

    });


    //scroll to top
    $(document).on('click', '#scrollTop', function() {       
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    //real world experiences
    $(document).on('click', 'a[href^="#"]', function() { 
      var target = $( $(this).attr('href'));

      if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });

    // video description | show full content on hover
    $(document).on('mouseover', '.video-descp', function() { 
      $(this).animate({bottom:0}, 'slow');
      return false;
    })

    


    //carousel
    $(document).on('click', '#img1', function() { 
     $("#gallery").carousel(4);
   });



  });

    /* H1 ticker */
    (function($){
      $.fn.list_ticker = function(options){

        var defaults = {
          speed:4000,
          effect:'slide'
        };

        var options = $.extend(defaults, options);

        return this.each(function(){

          var obj = $(this);
          var list = obj.children();
          list.not(':first').hide();

          setInterval(function(){
            list = obj.children();
            list.not(':first').hide();

            var first_li = list.eq(0)
            var second_li = list.eq(1)

            if(options.effect == 'slide'){
              first_li.slideUp();
              second_li.slideDown(function(){
                first_li.remove().appendTo(obj);
              });
            } else if(options.effect == 'fade'){
              first_li.fadeOut(function(){
                second_li.fadeIn();
                first_li.remove().appendTo(obj);
              });
            }
          }, options.speed)
        });
      };
    })(jQuery);


    /*reguler */
    $('#fade').list_ticker({
      speed:4000,
      effect:'fade'
    });
    $('#slide').list_ticker({
      speed:2000,
      effect:'slide'
    });




/* this code for image slider --------------------
 $(".image-gallery ul li").click(function(){
   $(".gallery-main").css({'display':'block'});
    $(".image-gallery").css({'display':'none'});
   }
  );

  $("#thumb-img1").click(function(){
    $("#imag1").css({'display':'block'});
    });


    $("#thumb-img2").click(function(){
    $("#imag2").css({'display':'block'});
    });


    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height()-140;

    $('#gallery-thumb1').css('height', viewportHeight + 'px');
    $('#gallery-thumb2').css('height', viewportHeight + 'px');
    $('#imag1','#imag2').css('width', 100 + '%');
    */

