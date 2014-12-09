(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57120854-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

$( document ).ready(function() {
  $("[rel='tooltip']").tooltip();
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

$(window).scroll(function() {
  $('.toSlideRight').each(function(){
    var itemPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

    if (itemPos < topOfWindow+600) {
      $(this).addClass("slideRight");
    }
  });

  $('.toSlideDown').each(function(){
    var itemPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

    if (itemPos < topOfWindow+600) {
      $(this).addClass("slideDown");
    }
  });
});

jQuery.scrollDepth({
  elements: ['#portfolio', '#contact'],
  percentage: false,
  nonInteraction: false,
});
