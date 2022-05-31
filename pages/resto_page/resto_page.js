let logo = document.getElementsByClassName("logo")[0];
let resto_name = document.getElementsByClassName("resto-name");
let city_name = document.getElementsByClassName("city-name");
let description = document.getElementById("description");
let phone_number = document.getElementById("phone-number");
let rating = document.getElementById("rating")
logo.addEventListener("click", function () {
  document.location = '../landing_page/landing_page.html';
})


let slide_index = 1;
showSlides(slide_index);

// Next/previous controls
function plusSlides(n) {
  showSlides(slide_index += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slide_index = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slide_index = 1 }
  if (n < 1) { slide_index = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_index - 1].style.display = "block";
  dots[slide_index - 1].className += " active";
}


// pop-up reviews section 
// Get the modal
var pop_up = document.getElementById("pop_up");

// Get the button that opens the review
var btn = document.getElementById("add_review");

// Get the <span> element that closes the form
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the form
btn.onclick = function () {
  pop_up.style.display = "block";
}
// When the user clicks on <span> (x), close the pop_up
span.onclick = function () {
  pop_up.style.display = "none";
}
// When the user clicks anywhere outside of the pop_up, close it
window.onclick = function (event) {
  if (event.target == pop_up) {
    pop_up.style.display = "none";
  }
}




let data = new FormData();
data.append('resto_id', localStorage.getItem("resto_id"));
axios({
  method: 'post',
  url: 'http://localhost/FoodWay-Backend/get_restaurant.php',
  data: data,
})
  .then(function (response) {
    console.log(response);
    let resto = response.data[0];
    for (let i = 0; i < resto_name.length; i++) {
      resto_name[i].innerHTML = resto.resto_name;
    }
    description.innerHTML = resto.description;
    phone_number.innerHTML += resto.phone_number;
  }
  )


let data1 = new FormData();
data1.append('resto_id', localStorage.getItem("resto_id"));
axios({
  method: 'post',
  url: 'http://localhost/FoodWay-Backend/get_city.php',
  data: data1,
})
  .then(function (response) {
    console.log(response);
    let city = response.data[0];
    for (let i = 0; i < city_name.length; i++) {
      city_name[i].innerHTML = city.city_name;
    }
  }
  )


let data2 = new FormData();
data2.append('id', localStorage.getItem("resto_id"));
axios({
  method: 'post',
  url: 'http://localhost/FoodWay-Backend/get_average_rating.php',
  data: data2,
})
  .then(function (response) {
    console.log(response);
    let avg_rating = response.data[0];
    if(avg_rating.avg == null){
      rating.innerHTML = "No rating yet";
    }else{
      rating.innerHTML = avg_rating.avg+ " &#9733";
    }
    
  }
  )
