var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var imgArrbox = [
  
  "images/12.jpg",
  "images/13.jpg",
  "images/15.jpg",
  "images/16.jpg",
 
];


window.onload = function imgRandom() { 
  var rand = Math.floor(Math.random()*imgArrbox.length);

document.getElementById('showcosmeticbox').src=imgArrbox[rand];



  } ;







  var imgArrBottle=["images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",]


 function imgRandom1() { 
    var rand1 = Math.floor(Math.random()*imgArrBottle.length);
  
  document.getElementById("showcosmeticbottle").src=imgArrBottle[rand1];
  
  
  
    } 
  ;
  imgRandom1();


  
  var imgArrchemicalBottle=[ "images/18.jpg",
  "images/19.jpg",
  "images/20.jpg",
  "images/21.jpg",]


 function imgRandom2() { 
    var rand2 = Math.floor(Math.random()*imgArrchemicalBottle.length);
  
  document.getElementById("showchemicalbottle").src=imgArrchemicalBottle[rand2];
  
  
  
    } 
  ;
  imgRandom2();
  



