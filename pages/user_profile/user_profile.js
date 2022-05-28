// Get the modal
var pop_up = document.getElementById("pop_up");

// Get the button that opens the sign up
var btn = document.getElementById("edit_prof");

// Get the <span> element that closes the form
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the form
btn.onclick = function() {
  pop_up.style.display = "block";
}

// When the user clicks on <span> (x), close the pop_up
span.onclick = function() {
  pop_up.style.display = "none";
}

// When the user clicks anywhere outside of the pop_up, close it
window.onclick = function(event) {
  if (event.target == pop_up) {
    pop_up.style.display = "none";
  }
}

// Add landing page link through logo image

let logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", function(){
    document.location='../landing_page/landing_page.html';
})