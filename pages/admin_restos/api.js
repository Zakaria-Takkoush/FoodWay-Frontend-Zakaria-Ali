let add_resto = document.getElementById("create");

add_resto.addEventListener("click", function(event) {
    event.preventDefault()

    // params: resto_name,phone_number,city_id,desc,cat

    const resto_name = document.getElementById("resto_name").value 
    const phone_number = document.getElementById("phone_number").value
    const city_id = document.getElementById("city").value
    const cat_id = document.getElementById("cate").value
    const desc = document.getElementById("description").value

    //Axios Function - Post

    let data = new FormData();
    data.append('resto_name', resto_name);
    data.append('phone_number', phone_number);
    data.append('description', desc);
    data.append('cat_id', cat_id);
    data.append('city_id', city_id);
    axios({
        method: 'post',
        url: 'http://localhost/FoodWay-Backend/add_resto.php',
        data: data,
    })
    .then(function (response) {
        let result = response.data;
        let message = result.status;
       // if (message === "Restaurant Added!") {
        //    document.getElementsByClassName("")[0].textContent = "Account Created!"
    //    }
        }
    )

})



