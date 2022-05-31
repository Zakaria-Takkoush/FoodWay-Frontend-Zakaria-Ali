let logo = document.getElementsByClassName("logo")[0];
let resto_name = document.getElementsByClassName("resto-name");
let city_name = document.getElementById("city-name");
let description = document.getElementById("description");
let phone_number = document.getElementById("phone-number");
let rating = document.getElementById("rating")
let review_submit= document.getElementById("review-submit");
let review_box= document.getElementById("reviewbox");
let review_popup = document.getElementById("pop_up");
let selected_rating=document.getElementsByClassName("selected-rating");
let profile=document.getElementById("nav-items");
//profile.style.cursor = "pointer";
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

profile.addEventListener("click",function(){
  document.location="../user_profile/user_profile.html";
})

// This api call is for get all of the restaurant targetted by the user
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

// This api call is for get the city name of the restaurant targetted by the user
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

    city_name.innerHTML = city.city_name;

  }
  )

// This api call is for get the  avarage rating of the restaurant targetted by the user
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
    if (avg_rating.avg == null) {
      rating.innerHTML = "No rating yet";
    } else {
      rating.innerHTML = avg_rating.avg + " &#9733";
    }

  }
  )


// Onclick of submite call theses apis
review_submit.onclick = function () {

  if(review_box!=null){
    // This api call is for to add review by a user to the restaurant targetted by the user
let data3 = new FormData();
data3.append('user_id', localStorage.getItem("logged_id"));
data3.append("rev_text", review_box.value);
data3.append("resto_id", localStorage.getItem("resto_id"));
axios({
  method: 'post',
  url: 'http://localhost/FoodWay-Backend/add_review.php',
  data: data3,
})
  .then(function (response) {
    console.log(response);
    
  }
  )}
  else {
    alert("Please enter a review");
  }

//This api call is for to add rating to the restaurant targetted by the user
let data4 = new FormData();
data4.append('user_id', localStorage.getItem("logged_id"));
data4.append("rating", 5);
data4.append("resto_id", localStorage.getItem("resto_id"));
axios({
  method: 'post',
  url: 'http://localhost/FoodWay-Backend/add_rating.php',
  data: data4,
})
  .then(function (response) {
    console.log("thisss"+response);
    review_popup.style.display = "none";
  }
  )
}