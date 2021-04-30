//DOCUMENT LOAD
$(document).ready(function() {
	jumbotronResize();	
	navbarVisibility();
	smoothScroll();
	captionVisiblity();
	
});
//WINDOW RESIZE
$(window).resize(function(){
	jumbotronResize();	
});
//WINDOW SCROLL
$(window).scroll(function(){
	 navbarVisibility();
	 captionVisiblity();		
});



//set the hight of the full-screen image to the screen's height
function jumbotronResize(){
	var winH = window.innerHeight ? window.innerHeight : $(window).height();
	$('.jumbotron').height(winH);
}

//update the visibility of navbar elements
function navbarVisibility(){
	var winH = window.innerHeight ? window.innerHeight : $(window).height();
	var link_color = 255;
	var navbar_bg = '#008FB4';
	if($(document).scrollTop()/(winH/2) < 1){
		navbar_opacity = ($(document).scrollTop()/(winH/2));
		navbar_bg = 'rgba(0,143,180,' + navbar_opacity +')';
		link_color = Math.ceil(navbar_opacity * 2 * 255);
	}
	//update the opacity/color of navbar elements
	$('.navbar').css({'background-color': navbar_bg });
	$('.navbar li a').css({'color': 'rgb('+link_color+','+link_color+','+link_color+')'  });
}

//update the visibility of the main photo caption
function captionVisiblity(){
	var winH = window.innerHeight ? window.innerHeight : $(window).height();
	var photo_info_opacity = 1-($(document).scrollTop()/(winH/2));
	$('.photo-info').css({'opacity': photo_info_opacity });
}


function smoothScroll(){
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({scrollTop: target.offset().top -90}, 1000);
				$('.navbar-collapse').removeClass('in');
				return false;
			}
		}
	});	
}