// JavaScript Document


//function to resize the video screen
function resizeVideo(){
	$("#opening-video").width($("#intro-video").innerWidth());
	$("#opening-video").height(31*($("#intro-video").innerWidth()/48));		
}

//function for setting sticky elements
function stickIt(){
		
		
	
		
	 	var		$navbarheight = $('.navbar').outerHeight(),
		  		$h2height = $('#letter-to-shareholders .section-header h2').outerHeight(),
				$sectionheaderheight = $('#letter-to-shareholders .section-header').height(),
				
				$topoffset = ($navbarheight + $h2height) + 19;
				$sectionheaderoffset= -($sectionheaderheight - $topoffset);
				
				
		$('.section.with-nav .section-content').stickyHeader({stickyClass : 'secondary-nav', type : 'nav'});		
		$('.section').stickyHeader({stickyClass : 'section-header', type : 'header'});
      	$('.section').stickyHeader({stickyClass : 'section-title', type : 'title'});
}

//function for better scrolling
function scrollFix(){
		
		 var	$navbarheight = $('.navbar').outerHeight();
		 		if($(window).width()< 500){
					$navbarheight = 81;
				}
		  var	$h2height = $('#letter-to-shareholders .section-header h2').outerHeight(),
				$topoffset = ($navbarheight + $h2height);
				
	 	 $('.secondary-nav a').smoothScroll({offset: -($topoffset + 19), speed: 700});
		 $('.nav a').smoothScroll({offset: -($navbarheight), speed: 700});
		  $('#scroll-hint').smoothScroll({offset: -($navbarheight), speed: 700});
}

//function for resizing sections
function resizeSections(){
	 var	$navbarheight = $('.navbar').outerHeight();
	$(".section").css({'min-height' : ($(window).height() - $navbarheight) + 'px'});
	$(".video-section").css({'min-height' : ($(window).height() - $navbarheight) + 'px'});
}

//function for resizing section headers
function resizeHeader(){
	$(".section-header").width($(".section").innerWidth());
	$(".section-header").height($(".section").innerWidth() * 0.383);
	$(".section-title").width($(".section").width());
	$(".section-header h2").width($(".section").width());
	$(".section-header h2").css("font-size", ($(".section-header").height() * 0.164) + "px");
	$(".section-header h2").css("line-height", ($(".section-header").height() * 0.164) + "px");
	$(".section-header h2").css("padding-top", ($(".section-header").height() * 0.072) + "px");
	$(".section-header h2").css("padding-bottom", ($(".section-header").height() * 0.097) + "px");
}
	
		
		
function flyout(){
	
	$('.box').clickover({html: true});
	$('#box8').click(
		function(){$('.box8reference').show();}
	);

}


$(window).resize(function() {

	
   resizeHeader();
   resizeVideo();
 	resizeSections();
   scrollFix();
   
});




      $(function() {
		  flyout();
		  resizeVideo();
		  resizeSections()
		  resizeHeader();
		  stickIt();
		  scrollFix();
		 
		 
		
		
		
		
	  });
	  


	  $(document).on('touchmove', scrollSpy);
	  $(window).scroll(scrollSpy);
	  
	  
	 function scrollSpy(){
		 
		 var bound_top = $(window).scrollTop();
        		
		 var	$navbarheight = $('.navbar').outerHeight(),
		  		$h2height = $('#letter-to-shareholders .section-header h2').outerHeight(),
				$topoffset = ($navbarheight + $h2height);

    	$(".section").each(function(){
			var $elTop = $(this).position().top;
			var $elBottom = $elTop + $(this).height();
        	if( ($elTop-$topoffset - 80) <= (bound_top) && $elBottom >= (bound_top+$topoffset + 80)){
				$("a[href*=#"+ $(this).attr('id')+"]").addClass('active');
				
        	}
			else{
            	$("a[href*=#"+ $(this).attr('id')+"]").removeClass('active');
			}
		});
		
		$(".sub-section").each(function(){
			var $elTop = $(this).position().top;
			var $elBottom = $elTop + $(this).height();
        	if( ($elTop-$topoffset - 80) <= bound_top && $elBottom >= (bound_top+$topoffset + 80)){
				$("a[href*=#"+ $(this).attr('id')+"]").addClass('active');
        	}
			else{
            	$("a[href*=#"+ $(this).attr('id')+"]").removeClass('active');
			}
		});

		 
		 
		 
	 }
	  
	  
