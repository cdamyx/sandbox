$(document).ready(function(){

	$(function() {
    	$("#draggable").draggable();
  	});

	$("p").click(function(){
		$(this).hide();
	});

});