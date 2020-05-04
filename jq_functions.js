$(document).ready(function(){

	$(function() {
    	$("#draggable").draggable();
  	});

	$(function() {
		$("#accordion").accordion();
	});


	$("p").click(function(){
		$(this).hide();
	});

});