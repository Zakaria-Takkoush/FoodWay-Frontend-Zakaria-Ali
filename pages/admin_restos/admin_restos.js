var resto_page = document.getElementById("restos_page")
var users_page = document.getElementById("users_page")
var reviews_page = document.getElementById("reviews_page")
var logo = document.getElementsByClassName("header")[0]

logo.addEventListener("click", function () {
    document.location = '../landing_page/landing_page.html';
})

resto_page.addEventListener("click", function () {
    document.location = '../admin_restos/admin_restos.html';
})

users_page.addEventListener("click", function () {
    document.location = '../admin_users/admin_users.html';
})

reviews_page.addEventListener("click", function () {
    document.location = '../admin_reviews/admin_reviews.html';
})


let resto_name = document.getElementById("resto_name");
let phone_number = document.getElementById("phone_number");
let cate = document.getElementById("cate");
let city = document.getElementById("city");
let description = document.getElementById("description");
let new_restos=[];
if (localStorage.restos != null) {
    new_restos = JSON.parse(localStorage.restos);
} else {
    new_restos = [];
}
localStorage.setItem("restos", JSON.stringify(new_restos));
let create = document.getElementById("create")
create.addEventListener("click", function () {
    let new_resto = {
        "name": resto_name.value,
        "phone_number": phone_number.value,
        "cate": cate.value,
        "city": city.value
    }
    new_restos.push(new_resto);
    localStorage.setItem("restos", JSON.stringify(new_restos));
    
    console.log(new_restos);
})

