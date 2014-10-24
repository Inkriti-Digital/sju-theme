var scrollNavP = $('body');

$(window).scroll(function() {

 // var navLock = ;
  if(scrollNavP.scrollTop() > 700){
    $('#scroll-nav').addClass('lock-nav');
    console.log("over 700");
  } else{
    $('#scroll-nav').removeClass('lock-nav');
  }
  // console.log(scrollNavP.scrollTop() );
});