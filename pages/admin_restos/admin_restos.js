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
    showData();
    clearData();
    console.log(new_restos);
})

function clearData() {
    resto_name.value = "";
    phone_number.value = "";
    cate.value = "";
    city.value = "";
    description.value = "";

}

function showData() {
    let table = '';
    for (let i = 0; i < new_restos.length; i++) {
        table += `
        <tr>
        <td>${i}</td>
        <td>${new_restos[i].name}</td>
        <td>${new_restos[i].phone_number}</td>
         <td>}${new_restos[i].cate}</td>
        <td>${new_restos[i].city}</td>
        <td>${new_restos[i].description}</td>   
        <td><i class="fa-solid fa-pen-to-square"></i></td>
        <td><i class="fa-solid fa-xmark"></i></td>
         </tr>`;
    }
    document.getElementById("tbody").innerHTML += table;
}
showData();