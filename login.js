// Get the modal
var pop_up = document.getElementById("pop_up");

// Get the button that opens the sign up
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  pop_up.style.display = "block";
}

// When the user clicks on <span> (x), close the pop_up
span.onclick = function() {
  pop_up.style.display = "none";
}

// When the user clicks anywhere outside of the pop_up, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}