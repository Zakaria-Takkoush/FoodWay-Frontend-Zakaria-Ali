let create_account = document.getElementById("sign_up_btn");

create_account.addEventListener("click", function(event) {
    event.preventDefault()

    // params: first_name, last_name, gender, email, password, phone_number, city_id

    const first_name = document.getElementById("fname").value 
    const last_name = document.getElementById("lname").value
    const gender = document.getElementById("gender").value
 //   const gender_val = select.options[gender.selectedIndex].value;
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const rep_password = document.getElementById("r_password").value
    //const phone_number = document.getElementById("number").value
    const city_id = document.getElementById("city").value

    if (password !== rep_password) {
        alert("Passwords do not match!")
        return
    }

    //Axios Function - Post

    let data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('gender', gender);
    data.append('email', email);
    data.append('password', password);
    data.append('phone_number', '123');
    data.append('city_id', city_id);
    axios({
        method: 'post',
        url: 'http://localhost/FoodWay-Backend/signup.php',
        data: data,
    })
    .then(function (response) {
        let result = response.data;
        let message = result.status;
        if (message === "Account Created!") {
            document.getElementsByClassName("signup_top")[0].textContent = "Account Created!"
        }
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("r_password").value = "";
        //const phone_number = document.getElementById("number").value
        document.getElementById("city").value = "";
        document.location = "index.html";
        }
    )

})


// get the id of the user

/*
// let data = new FormData();
axios({
    method: "get",
    url: "http://localhost/FoodWay-Backend/login.php",
    //        data: data,
  }).then(function (response) {
    users = response.data;
    console.log(response.data);
  
    // loop through users object array to grab dat
    */