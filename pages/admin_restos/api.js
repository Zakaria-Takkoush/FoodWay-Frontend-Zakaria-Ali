let add_resto = document.getElementById("create");

add_resto.addEventListener("click", function(event) {
    event.preventDefault()

    // params: first_name, last_name, gender, email, password, phone_number, city_id

    const resto_name = document.getElementById("resto_name").value 
    const phone_number = document.getElementById("phone_number").value
    const city_id = document.getElementById("city").value
    const desc = document.getElementById("city").value
    const cat = document.getElementById("cate").value

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
        }
    )

})



