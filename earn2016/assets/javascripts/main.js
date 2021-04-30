(function($) {
var scroll = false;

$(window).scroll(scrollspy);

function scrollspy(){
	var scrollTop = $(window).scrollTop();
	if (scrollTop >= 20 && scroll == false) {
		$('body').addClass('scroll');
		scroll = true;
	} else if (scrollTop < 10 && scroll == true) {
		$('body').removeClass('scroll');
		scroll = false
	}
}




$('.navbar-collapse').on('hidden.bs.collapse', function () {
  $('body').removeClass('nav-open');
})
$('.navbar-collapse').on('show.bs.collapse', function () {
  $('body').addClass('nav-open');

})


}(jQuery));



$(function() {
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      $('.navbar-collapse').removeClass('in');	//hide nav
      $('body').removeClass('nav-open');
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
	      var navOffset = ($('.navbar-header').height() - 25);
        $('html,body').animate({
          scrollTop: target.offset().top -navOffset
        }, 500);
        return false;
      }
    }
  });
});


(function($) {


	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');
    var edge_ie = ua.indexOf('Edge');

    if ((old_ie > -1) || (new_ie > -1) || (edge_ie > -1)) {
        ms_ie = true;
    }

    if ( ms_ie ) {
	    //alert('is_ie!');
        $('html').addClass('is_ie');
    }
}(jQuery));