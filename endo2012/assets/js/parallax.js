$(document).ready(function(){
    $('.section-header').each(function(){
        var $bgobj = $(this); // assigning the object
		var $bgtop = $bgobj.offset().top;

        $(window).scroll(function() {
           $wintop = $(document).scrollTop();
		    var	$navbarheight = $('.navbar').outerHeight();
		   
		   if( $bgtop <= ($wintop + $navbarheight  )){
           	var yPos = (($bgtop-($wintop + $navbarheight ))/ 30) ; 
			//if(yPos > -200){
			//alert($wintop + ' | ' +  $bgtop+ ' | ' + yPos + " | " + $bgobj.parent().parent().attr('id'));
			
			//}
            var coords = '0px '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
		   }else{$bgobj.css({ backgroundPosition: '0px 0px' });}
		   
        }); 
        
        
        
        
        
        $(document).on('touchmove',function() {
           $wintop = $(document).scrollTop();
		    var	$navbarheight = $('.navbar').outerHeight();
		   
		   if( $bgtop <= ($wintop + $navbarheight  )){
           	var yPos = (($bgtop-($wintop + $navbarheight ))/ 30) ; 
			//if(yPos > -200){
			//alert($wintop + ' | ' +  $bgtop+ ' | ' + yPos + " | " + $bgobj.parent().parent().attr('id'));
			
			//}
            var coords = '0px '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
		   }else{$bgobj.css({ backgroundPosition: '0px 0px' });}
		   
        }); 
        
        
        
        
    });    
}); 
