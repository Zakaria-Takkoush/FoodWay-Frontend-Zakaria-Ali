let add_resto = document.getElementById("create");
let edit = document.getElementById("edit");
let delete_resto = document.getElementById("delete");
let all_restaurants;
 // params: resto_name,phone_number,city_id,desc,cat

    let resto_name = document.getElementById("resto_name").value
    let phone_number = document.getElementById("phone_number").value
    let city_id = document.getElementById("city").value
    let cat_id = document.getElementById("cate").value
    let desc = document.getElementById("description").value

add_resto.addEventListener("click", function (event) {
    event.preventDefault()

   

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
        all_restaurants = restaurants;
        console.log(restaurants);
        // Adding every resto in the database as the below div 
        for (let i = 0; i < restaurants.length; i++) {
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
                <td class="edit" onclick="editResto(${restaurants[i].resto_id})" id="edit" ><i class="fa-solid fa-pen-to-square"></i></td>
                <td onclick="deleteResto(${restaurants[i].resto_id})" class="delete" id="delete"><i class="fa-solid fa-xmark"></i></td>
                </tr>`;
            }
            document.getElementById("tbody").innerHTML = table;
            edit.addEventListener("click", function () {
            resto_name.value="restaurants[idd].resto_name";
            phone_number.value="restaurants[idd].phone_number";
            city_id.value="restaurants[idd].city_id";
            cat_id.value="restaurants[idd].cat_id";
            desc.value="restaurants[idd].description";
        })
        }
        
    }
    )

delete_resto.addEventListener("click", deleteResto());

function deleteResto(resto_id) {
    let data = new FormData();
    data.append('id', resto_id);
    axios({
        method: 'post',
        url: 'http://localhost/FoodWay-Backend/delete_resto.php',
        data: data,
    })
        .then(function (response) {
            let result = response.data;
            console.log(result);
        }
        )
}

// edit.addEventListener("click", editResto());

// function editResto(id) {
//     console.log("clicked")
//     resto_name.value = all_restaurants[id].resto_name;
//     phone_number.value = all_restaurants[id].phone_number;
//     city_id.value = all_restaurants[id].city_id;
//     cat_id.value = all_restaurants[id].cat_id;
//     desc.value = all_restaurants[id].description;
//   } 






    // let data = new FormData();
    // data.append('name', resto_name);
    // data.append('phone', phone_number);
    // data.append('description', desc);
    // data.append('cat_id', cat_id);
    // data.append('city_id', city_id);
    // data.append('id', resto_id);
    // axios({
    //     method: 'post',
    //     url: 'http://localhost/FoodWay-Backend/edit_resto.php',
    //     data: data,
    // })
    //     .then(function (response) {
    //         let result = response.data;
    //         console.log(result);
    //     })
   

