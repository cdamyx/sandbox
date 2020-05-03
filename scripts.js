$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


function myFunction() {
	alert("hello world");
};

function newFunc(clickedElement, listID) {
	clickedElement.classList.toggle("clickBackground");
	document.getElementById(listID).classList.toggle("showDropdown");
};