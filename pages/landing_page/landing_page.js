
// On click of the resto Card go to the restaurant page
let resto_card = document.getElementsByClassName("card");
for (let i = 0; i < resto_card.length; i++) {
    resto_card[i].addEventListener("click", function () {
        document.location = "../resto_page/resto_page.html";
    })
}
// Just show the first row and on click of see all u can see all restos and on click on it again u can see the first row
let see_all = document.getElementsByClassName("see-all-btn")[0];
see_all.addEventListener("click", function () {
    for (let i = 0; i < resto_card.length; i++) {
        resto_card[i].classList.toggle("not-showen");
    }
})




// Get all the restaurants in the database and show them in the landing page 
window.addEventListener("load", function (event) {

    axios({
        method: 'get',
        url: 'http://localhost/FoodWay-Backend/restaurants.php',
    })
        .then(function (response) {
            
            let restaurants = response.data;
            let resto = '';
            // Adding every resto in the database as the below div 
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



