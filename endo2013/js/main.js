$(document).ready(function(){
 $('#' + $('body').attr('id').substr(3)).animate({right:'0'},0);
 
  $('#ie-warning-closer').click(function(){
	  $('#ie-warning').hide();
	  
  });
  
  
  $("#home-section-nav a, .nav-offscreen a, #home-toggle, .section-nav, .navbar-brand").on("click", function(e){
    e.preventDefault();
    var currentSection = '#' + $('body').attr('id').substr(3);
    var newSection = $(this).attr("href");
    var newBodyID = 'in-' + newSection.substring(1);
    var animTime = 500;
    
    if(newSection != currentSection){
    
    
	    $('body').attr('id', newBodyID);
		$(currentSection).animate(
				{right:'120%'}, 
				animTime
			).delay((animTime*2)).animate({right:'-120%'}, 0);
		
		
		$(newSection).animate(
				{right:'0'}, 
				animTime
			);
		$("html, body").animate({ scrollTop: 0 }, 150);
	
	} //END IF NEW SECTION != CURRENT SECTION
 }); // end click event handler
  
});



$(document).ready(function(){
  $("#nav-toggle, #nav-toggle-close, .nav-offscreen a").on("click", function(e){
    e.preventDefault();
    $('.nav-offscreen').toggleClass('in');
 }); // end click event handler
  
});
