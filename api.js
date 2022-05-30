let create_account = document.getElementById("sign_up_btn");

create_account.addEventListener("click", function(event) {
    event.preventDefault()

    // params: first_name, last_name, gender, email, password, phone_number, city_id

    //Axios Function - Post

    let data = new FormData();
    data.append('first_name', "");
    data.append('last_name', "");
    data.append('gender', "");
    data.append('email', "");
    data.append('password', "");
    data.append('phone_number', "");
    data.append('city_id', "");
    axios({
        method: 'post',
        url: 'http://localhost/FoodWay-Backend/signup.php',
        data: data,
    })
    .then(function (response) {
        console.log(response);
        }
    )

})



