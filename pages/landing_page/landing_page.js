
// On click of the resto Card go to the restaurant page
let resto_card = document.getElementsByClassName("card");
let profile=document.getElementById("landing-nav");
profile.style.cursor="pointer";
let any;
for (let i = 0; i < resto_card.length; i++) {
    resto_card[i].addEventListener("click",directToResto)
}
function directToResto(id) {
    document.location = "../resto_page/resto_page.html";
    localStorage.setItem("resto_id", id);
}

// Just show the first row and on click of see all u can see all restos and on click on it again u can see the first row
let see_all = document.getElementsByClassName("see-all-btn")[0];
see_all.addEventListener("click", function () {
    for (let i = 0; i < resto_card.length; i++) {
        resto_card[i].classList.toggle("not-showen");
    }
})




profile.addEventListener("click",function(){
    document.location="../user_profile/user_profile.html";
})
// 

    // let data = new FormData();
    // // data.append('city_id', "1");
    // axios({
    //     method: 'get',
    //     url: 'http://localhost/FoodWay-Backend/get_city.php',
    //     // data: data,
    // })
    //     .then(function (response) {
    //         console.log(response.data);
    //         let cities = response.data;
    //         let city = '';
    //         for (let i = 0; i < cities.length; i++) {
    //             let city_name = cities[i].city_name;
    //             city = `
    //             <div class="area-name">
    //         <h1>${city_name}</h1>
    //         <div class="see-all-btn" id="see-all">See All or See less &#8594</div>
    //     </div>
    //             `
    //             document.getElementById("resto-card").innerHTML += city;
                
    //         }
    //     }
    //     )
        axios({
            method: 'get',
            url: 'http://localhost/FoodWay-Backend/restaurants.php',
        })
            .then(function (response) {
    
                let restaurants = response.data;
                let resto = '';
                let city='';
                // Adding every resto in the database as the below div 
                for (let i = 0; i < restaurants.length; i++) {
                    let resto_name = restaurants[i].resto_name;
                    let resto_id = restaurants[i].resto_id;
                    let resto_city = restaurants[i].city_id;
                    resto = `
                <div  class="card not-showen"   onclick="directToResto(this.id)" id="${resto_id}">
                        <img class="resto-img" src="../../assets/images/resto4.jpg" alt="">
                        <div class="resto-card-content">
                            <h3 class="resto-name">${resto_name}</h3>
                            <h3 class="resto-location">${resto_city}</h3>
                        </div>
                    </div>
                `
                    document.getElementById("resto-card").innerHTML += resto;
                }
            }
            )
    //  let data = new FormData();
    // data.append('city_id', "1");
    // axios({
    //     method: 'get',
    //     url: 'http://localhost/FoodWay-Backend/get_city.php',
    //     // data: data,
    // })
    //     .then(function (response) {
    //         console.log(response.data);
    //         let cities = response.data;
    //         let city = '';
    //         for (let i = 0; i < cities.length; i++) {
    //             let city_name = cities[i].city_name;
    //             city = `
                
    //         <h1>${city_name}</h1>
            
            
    //             `
    //             document.getElementsByClassName("area-name")[0].before(see_all)+= city;
                
    //         }
    //     }
    //     )
    

    // Get user info and insert them to landing page...

    // To change the name
    user_name = document.getElementById("user_name")

    // Link id to landing page
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
            user_name.innerHTML = user.first_name + " " + user.last_name    // display the user name
  }
  )




