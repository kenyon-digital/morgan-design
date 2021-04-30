(function ($) {
    $.fn.stickyHeader = function (options) {

        var settings = $.extend({
            stickyClass: 'header',
			offset: 0,
			type: 'header'
        }, options);

        return $(this).each(function () {
			

            var container = $(this);
            var header = $('.' + settings.stickyClass, container);
			var type = settings.type

            var placeholder = undefined;
           
            $(window).scroll(function () {
				var originalCss = {
                	position: container.css('position'),
               	 	top: container.css('top'),
               	 	width: container.css('width')
					
            	};
				if(type == "nav"){
					var originalCss = {
						position: container.css('position'),
						top: container.css('top'),
						width: header.css('width')
						
					};
				}
				
				
				
				var padding = -($('#letter-to-shareholders .section-header').height() - ($('.navbar').outerHeight() + $('#letter-to-shareholders .section-header h2').outerHeight()));
				if(type == "nav"){
					padding = $('.navbar').outerHeight() + $('#letter-to-shareholders .section-header h2').outerHeight() + 19;
					
				}
				else if(type == "title"){
					padding = $('.navbar').outerHeight();
				}
				
				
				var originalWidth = container.outerWidth();
                if(type == "nav"){var originalWidth = header.outerWidth();}
				var containerTop = container.offset().top;
                var headerOrigin = header.offset().top;
                var headerHeight = header.outerHeight();
                var containerHeight = container.outerHeight();
                var containerTop = container.offset().top;
                var containerSize = container.outerHeight();
                var pageOffset = $(window).scrollTop() + padding;
                var containerBottom = containerHeight + containerTop;
				
                if (pageOffset < containerTop && placeholder != undefined) {
                    if (placeholder != undefined) {
                        placeholder.remove();
                        placeholder = undefined;
                        header.css(originalCss);
                    }
                }
                else if (pageOffset > containerTop && pageOffset < (containerBottom - headerHeight)) {
                    if (placeholder == undefined) {
                        
						placeholder = $('<div/>')
                        .css('height', header.outerHeight() + 'px')
                        .css('width', header.width() + 'px')
						.addClass("sticky-placeholder");
                        header.before(placeholder);
                        header.css('position', 'fixed');
                        header.css('width', originalWidth + 'px');
                    }
                    header.css('top', padding + 'px');
                }
                else if (pageOffset > (containerBottom - headerHeight)) {
                    header.css('top', (containerBottom - headerHeight) - pageOffset + padding + 'px');
                }
            });
			
			
			
			
			
			
			
				  $(document).on('touchmove', function(event) {
var originalCss = {
                	position: container.css('position'),
               	 	top: container.css('top'),
               	 	width: container.css('width')
					
            	};
				if(type == "nav"){
					var originalCss = {
						position: container.css('position'),
						top: container.css('top'),
						width: header.css('width')
						
					};
				}
				
				
				
				var padding = -($('#letter-to-shareholders .section-header').height() - ($('.navbar').outerHeight() + $('#letter-to-shareholders .section-header h2').outerHeight()));
				if(type == "nav"){
					padding = $('.navbar').outerHeight() + $('#letter-to-shareholders .section-header h2').outerHeight() + 19;
					
				}
				else if(type == "title"){
					padding = $('.navbar').outerHeight();
				}
				
				
				var originalWidth = container.outerWidth();
                if(type == "nav"){var originalWidth = header.outerWidth();}
				var containerTop = container.offset().top;
                var headerOrigin = header.offset().top;
                var headerHeight = header.outerHeight();
                var containerHeight = container.outerHeight();
                var containerTop = container.offset().top;
                var containerSize = container.outerHeight();
                var pageOffset = $(window).scrollTop() + padding;
                var containerBottom = containerHeight + containerTop;
				
                if (pageOffset < containerTop && placeholder != undefined) {
                    if (placeholder != undefined) {
                        placeholder.remove();
                        placeholder = undefined;
                        header.css(originalCss);
                    }
                }
                else if (pageOffset > containerTop && pageOffset < (containerBottom - headerHeight)) {
                    if (placeholder == undefined) {
                        
						placeholder = $('<div/>')
                        .css('height', header.outerHeight() + 'px')
                        .css('width', header.width() + 'px')
						.addClass("sticky-placeholder");
                        header.before(placeholder);
                        header.css('position', 'fixed');
                        header.css('width', originalWidth + 'px');
                    }
                    header.css('top', padding + 'px');
                }
                else if (pageOffset > (containerBottom - headerHeight)) {
                    header.css('top', (containerBottom - headerHeight) - pageOffset + padding + 'px');
                }



});
			
			
			
			
			
			
			
			
			
			 $(window).resize(function () {
				var originalCss = {
                	position: container.css('position'),
               	 	top: container.css('top'),
               	 	width: container.css('width')
					
            	};
				if(type == "nav"){
					var originalCss = {
						position: container.css('position'),
						top: container.css('top'),
						width: header.css('width')
						
					};
				}
				
				
				
				var padding = -($('#letter-to-shareholders .section-header').height() - ($('.navbar').outerHeight() + $('#letter-to-shareholders .section-header h2').outerHeight()));
				if(type == "nav"){
					padding = $('.navbar').outerHeight() + $('#letter-to-shareholders .section-header h2').outerHeight() + 19;
					
				}
				else if(type == "title"){
					padding = $('.navbar').outerHeight();
				}
				
				
				var originalWidth = container.outerWidth();
                if(type == "nav"){var originalWidth = header.outerWidth();}
				var containerTop = container.offset().top;
                var headerOrigin = header.offset().top;
                var headerHeight = header.outerHeight();
                var containerHeight = container.outerHeight();
                var containerTop = container.offset().top;
                var containerSize = container.outerHeight();
                var pageOffset = $(window).scrollTop() + padding;
                var containerBottom = containerHeight + containerTop;
				
                if (pageOffset < containerTop && placeholder != undefined) {
                    if (placeholder != undefined) {
                        placeholder.remove();
                        placeholder = undefined;
                        header.css(originalCss);
                    }
                }
                else if (pageOffset > containerTop && pageOffset < (containerBottom - headerHeight)) {
                    if (placeholder == undefined) {
                        
						placeholder = $('<div/>')
                        .css('height', header.outerHeight() + 'px')
                        .css('width', header.width() + 'px')
						.addClass("sticky-placeholder");
                        header.before(placeholder);
                        header.css('position', 'fixed');
                        header.css('width', originalWidth + 'px');
                    }
                    header.css('top', padding + 'px');
                }
                else if (pageOffset > (containerBottom - headerHeight)) {
                    header.css('top', (containerBottom - headerHeight) - pageOffset + padding + 'px');
                }
            });
			
			
			
			
			
			
			
			
			
			
			
			
			
			
        });
    }
})(jQuery);