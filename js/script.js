window.onscroll = function() { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop; // Where the header originally is

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky"); // Stick to top when scrolled
  } else {
    header.classList.remove("sticky"); // Return below image
  }
}

function redirectToLanguage() {
  const selectedLanguage = document.getElementById("languages").value;
  window.location.href = selectedLanguage;
}

