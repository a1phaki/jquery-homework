$(document).ready(function() {

    function showGoTopBtn(){
      if($(this).scrollTop() > 250){
        $('.go-top').fadeIn();
      }else{
        $('.go-top').fadeOut();
      }
    }
    $(window).scroll(showGoTopBtn);

    $('.go-top a').click(function(event) {
     event.preventDefault();
     $('html,body').animate({
       scrollTop: 0
     }, 1000);
    });
    $('.dropdown').click(function(e) {
        /* Act on the event */
        e.preventDefault();
        $('.dropdown-open').slideToggle();
      });
});

