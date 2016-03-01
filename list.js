$(document).ready(function() {
	$.getJSON('bg-images.json', function(data) { 
	
	  console.log(data.bgImages.length);    
	  var randomImage = data.bgImages[Math.floor(Math.random()*data.bgImages.length)];
	  console.log(randomImage);
	  $("body.random").css('background-image', randomImage.src);
	       
	});
});