var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slika");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}



function show(){
  var cs = document.getElementById("csgo");
var fortnite = document.getElementById("fortnite");
var lol = document.getElementById("lol");
var skyrim = document.getElementById("skyrim");
if(slideIndex===1){
  cs.style.display = "block";
  fortnite.style.display = "none";
  lol.style.display = "none";
  skyrim.style.display = "none";
}
if(slideIndex===2){
  cs.style.display = "none";
  fortnite.style.display = "block";
  lol.style.display = "none";
  skyrim.style.display = "none";
}
if(slideIndex===3){
  cs.style.display = "none";
  fortnite.style.display = "none";
  lol.style.display = "block";
  skyrim.style.display = "none";
}
if(slideIndex===4){
  cs.style.display = "none";
  fortnite.style.display = "none";
  lol.style.display = "none";
  skyrim.style.display = "block";
}
}
function errorText(){
var j=0;
var ime = document.getElementById("ime");
var email = document.getElementById("email");
var error=document.getElementById("error");

if (ime && ime.value) {
  if(email && email.value){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("error").innerHTML =
          this.responseText;
        }
      };
      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
    
  }
  else{
    error.style.display = "block";

  }
}
else{
  error.style.display = "block";

}}
