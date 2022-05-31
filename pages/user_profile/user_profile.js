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

    //user_city.innerHTML = response.data[0]

  }
  )

  // edit profile

  let edit_account = document.getElementById("change_prof");

  edit_account.addEventListener("click", function(event) {
    event.preventDefault()

    // params: first_name, last_name, gender, email, password, phone_number, city_id

    const first_name = document.getElementById("fname").value 
    const last_name = document.getElementById("lname").value
    const gender = document.getElementById("gender").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const rep_password = document.getElementById("r_password").value
    //const phone_number = document.getElementById("number").value
    const city_id = document.getElementById("city").value

    if (password !== rep_password) {
        alert("Passwords do not match!")
        return
    }

    //Axios Function - Edit Profile

    let data = new FormData();
    data.append('user_id', localStorage.getItem("logged_id"));
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('gender', gender);
    data.append('email', email);
    data.append('password', password);
    // data.append('phone_number', '123');
    data.append('city_id', city_id);
    axios({
        method: 'post',
        url: 'http://localhost/FoodWay-Backend/edit_profile.php',
        data: data,
    })
    .then(function (response) {
        let result = response.data;
        let message = result.success;
        console.log(response.data)
        // if (message === true) {
        //     document.getElementsByClassName("signup_top")[0].textContent = "Profile Edited!"
        // }
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("r_password").value = "";
        //const phone_number = document.getElementById("number").value
        document.getElementById("city").value = "";
        //document.location = "user_profile.html";
        }
    )

})