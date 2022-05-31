let add_resto = document.getElementById("create");


add_resto.addEventListener("click", function (event) {
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
            console.log(result);
            // let message = result.status;
            // if (message === "Restaurant Added!") {
            //    document.getElementsByClassName("")[0].textContent = "Account Created!"
            //    } 



        }
        )

})



axios({
    method: 'get',
    url: 'http://localhost/FoodWay-Backend/restaurants.php',
})
    .then(function (response) {

        let restaurants = response.data;
        console.log(restaurants);
        let resto = '';
        // Adding every resto in the database as the below div 
        for (let i = 0; i < restaurants.length; i++) {
            let resto_name = restaurants[i].resto_name;
            let resto_id = restaurants[i].resto_id;
            let resto_city = restaurants[i].city_id;
            let table = '';
            for (let i = 0; i < restaurants.length; i++) {
                table += `
                <tr>
                <td>${restaurants[i].resto_id}</td>
                <td>${restaurants[i].resto_name}</td>
                <td>${restaurants[i].phone_number}</td>
                <td>${restaurants[i].cat_id}</td>
                <td>${restaurants[i].city_id}</td>
                <td>${restaurants[i].description}</td>   
                <td class="edit" onclick="updateData(${restaurants[i].resto_id})" id="edit" ><i class="fa-solid fa-pen-to-square"></i></td>
                <td onclick="deleResto(${restaurants[i].resto_id})" class="delete" id="delete"><i class="fa-solid fa-xmark"></i></td>
                </tr>`;
            }
            document.getElementById("tbody").innerHTML = table;
        }
    }
    )

    




