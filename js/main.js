
$(function(){
	$(".scrollbtn").click(function() {
     	$('html, body').animate({
         	scrollTop: $("#scrolldown").offset().top
     	}, 1500);
	 });

	var overlay = document.getElementById('overlay');
	var video__banner = document.getElementById('video__banner');
	var vid = document.getElementById('video');
	$(".video__banner,.video__play").click(function(){
		overlay.className = "o";
		video__banner.className = "o";
		vid.play();

	});


	// $("video").click(function() {
 //     	if (vid.paused){
 //     		overlay.className = "o";
 //    	    vid.startVideo(); 
 //    	    alert(1);
    	    
 //    	}else{
 //    		overlay.className = "";
 //    	    vid.stopVideo(); 
 //    	    alert(2);
    	    
 //    	}
	//  });

});