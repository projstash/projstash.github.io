$(document).ready(function(){
	// $('.container').onepage_scroll();
	$(".container").onepage_scroll({
	   sectionContainer: "section",
	   easing: "ease-in-out",                  
	                                    
	   animationTime: 600,             
	   pagination: true,                
	   updateURL: false,                
	   beforeMove: function(index) {
	   	$('section:nth-child('+index+')').find('.text').delay(300).animate({marginTop: 0, opacity: 1}, 400);
	   		$('section:nth-child('+index+')').find('.section-img').delay(300).animate({marginTop: 0, opacity: 1}, 200);
	   },
	   afterMove: function(index) {
	   		//after move callback
	   },   
	   loop: false,                    
	   keyboard: true,                  
	   responsiveFallback: false,        
	                                                             
	   direction: "vertical"              
	});

	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(document).mousemove(function(e){
	      var pageX = e.pageX - ($(window).width() / 2);
	      var pageY = e.pageY - ($(window).height() / 2);

	      $('ul.bubbles li').each(function(){
			var i = $(this).index() + 1;

	    	var left = $(this).position().left;
	    	var top = $(this).position().top;

	    	$(this).css({ 'left': left + (pageX / (i * 200)) + 'px', 'top': top + (pageY / (i * 200)) + 'px'});
	    })
	});

});
