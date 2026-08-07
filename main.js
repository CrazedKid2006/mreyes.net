
// Automatic Slideshow - change image every 3 seconds
var slideIndex = 0;

function SlideShow() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slideshow, 3000);
}



// Random Bible Quote Function
function GenerateBibleQuote() {
  var x = document.getElementById('random-bible-quote');
  x.textContent = '"For the law was given through Moses; grace and truth came through Jesus Christ" -John 1:17';
}

