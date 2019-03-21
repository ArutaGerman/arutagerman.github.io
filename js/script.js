 function showHide() {
       document.getElementById("nav_sm_showHide").style.display = "flex";
     }

function viewdiv(){
var el=document.getElementById('nav_sm_showHide');
if(el.style.display=="flex"){
el.style.display="none";
} else {
el.style.display="flex";
}
}

$(document).ready(function() {
	
});


(function($){
	$(document).ready(function(){
		$('.lightbox').fancybox();
	});
})(jQuery)


