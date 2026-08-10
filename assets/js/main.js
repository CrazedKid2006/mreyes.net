
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



// OnClick functions
function Redirect(url) {
  location.href = url;
}

function ClickBack() {
  Redirect("../");
}

function Copy2Clipboard() {

}



// Pull from other websites function
function GetComMsg() {
  var x = document.getElementById('commit-message');
  x.textContent = "Error: last commit message not accessible";

  fetch('https://api.github.com/repos/crazedkid2006/mreyes.net/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
      x.textContent = res[0].commit.message
    })
}