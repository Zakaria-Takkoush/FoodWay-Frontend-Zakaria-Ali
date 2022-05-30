let resto_card = document.getElementsByClassName("card");
for (let i = 0; i < resto_card.length; i++) {
    resto_card[i].addEventListener("click", function () {
        document.location = "../resto_page/resto_page.html";
    })
}
let see_all = document.getElementsByClassName("see-all-btn")[0];
see_all.addEventListener("click", function () {
    for (let i = 0; i < resto_card.length; i++) {
        resto_card[i].classList.toggle("not-showen");
    }
})


let logoo = document.getElementsByClassName("header-logo")[0];
let resto_cards = document.getElementById("restos-card");

window.addEventListener("load", function (event) {

    axios({
        method: 'get',
        url: 'http://localhost/FoodWay-Backend/restaurants.php',
    })
        .then(function (response) {
            console.log(response.data);
            let restaurants = response.data;
            // let resto_id = restaurants[0].resto_id;

            // let description = restaurants[0].description;
            // let resto_img = restaurants[0].resto_img;
            // let resto_city_id = restaurants[0].city_id;
            // let resto_cat_id = restaurants[0].cat_id;

            let resto = '';
            for (let i = 0; i < restaurants.length; i++) {
                let resto_name = restaurants[i].resto_name;
                resto = `
            <div class="card not-showen">
                    <img class="resto-img" src="../../assets/images/resto4.jpg" alt="">
                    <div class="resto-card-content">
                        <h3 class="resto-name">${resto_name}</h3>
                    </div>
                </div>
            `
                document.getElementById("resto-card").innerHTML += resto;
            }



        }
        )

})



