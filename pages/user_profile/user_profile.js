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


// Edit Profile --- API

    // To change the name and city:
    user_name = document.getElementsByClassName("user_name")
    user_city = document.getElementById("user_city")

    // Link name to profile page
    let data = new FormData();
        data.append('user_id', localStorage.getItem("logged_id"));
        axios({
        method: 'post',
        url: 'http://localhost/FoodWay-Backend/get_user_data.php',
        data: data,
        })
        .then(function (response) {
            // console.log(response.data);
            // console.log(response.data[0].first_name);
            let user = response.data[0];    // grab the jason data
            //user_name.innerHTML = user.first_name + " " + user.last_name    // display the user name
            for (let i =0; i < user_name.length; i++) {
              user_name[i].innerHTML = user.first_name + " " + user.last_name
              us
            }
  }
  )

    // Link city to profile page:

let data1 = new FormData();
data.append('user_id', localStorage.getItem("logged_id"));
axios({
  method: 'post',
  url: 'http://localhost/FoodWay-Backend/get_user_city.php',
  data: data1,
})
  .then(function (response) {
    // console.log(response.data[0]);
    // console.log(response.data);

    user_city.innerHTML = response.data[0]

  }
  )