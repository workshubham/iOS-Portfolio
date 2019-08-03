var modal 				= document.getElementById('myModal');

var moreScreensWatcho	= document.getElementById("more-screens-watcho");
var moreScreensNonton = document.getElementById("more-screens-nonton");
var moreScreensDialog 		= document.getElementById("more-screens-dialog");
var modalImg 			= document.getElementById("img01");


moreScreensWatcho.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-watcho.jpg"
}

moreScreensNonton.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-nonton.jpg"
}

moreScreensDialog.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-dialog.jpg"
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}