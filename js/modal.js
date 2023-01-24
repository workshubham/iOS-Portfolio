var modal 				= document.getElementById('myModal');

var moreScreensWatcho	= document.getElementById("more-screens-watcho");
var moreScreensNonton = document.getElementById("more-screens-nonton");
var moreScreensDialog 		= document.getElementById("more-screens-dialog");
var moreScreensHalanx		= document.getElementById("more-screens-halanx");
var moreScreensGamepaln 		= document.getElementById("more-screens-gameplan");
var moreScreensAirtel         = document.getElementById("more-screens-airtel");
var moreScreensPaytm         = document.getElementById("more-screens-paytm");
var modalImg 			= document.getElementById("img01");

moreScreensWatcho.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-watcho.png"
}

moreScreensNonton.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-nonton.png"
}

moreScreensDialog.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-dialog.png"
}

moreScreensHalanx.onclick = function() {
	modal.style.display = "block";
	modalImg.src = "img/index/product-halanx.png"
}

moreScreensGamepaln.onclick = function() {
	modal.style.display = "block";
	modalImg.src = "img/index/product-gameplan.png"
}

moreScreensAirtel.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-airtel.png"
}

moreScreensPaytm.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "img/index/product-paytm.png"
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}