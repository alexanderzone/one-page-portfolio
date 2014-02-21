$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    // $('.thumbnail').hover(
    //     function(){
    //         $(this).find('.caption').slideDown(250); //.fadeIn(250)
    //     },
    //     function(){
    //         $(this).find('.caption').slideUp(450); //.fadeOut(205)
    //     }
    // ); 
});

$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$(function() {
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});
