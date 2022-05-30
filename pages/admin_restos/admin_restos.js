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

/* Edit Records */
let resto_name = document.getElementById("resto_name");
let phone_number = document.getElementById("phone_number");
let cate = document.getElementById("cate");
let city = document.getElementById("city");
let description = document.getElementById("description");
let new_restos; //= [];
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
    if (update === false) {
        new_restos.push(new_resto);
        localStorage.setItem("restos", JSON.stringify(new_restos));
    } else {
        new_resto[temp] = new_resto;
        update = false;
        create.innerHTML = "Create";
    }

    showData();
    clearData();


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
         <td>${new_restos[i].cate}</td>
        <td>${new_restos[i].city}</td>
        <td>${new_restos[i].description}</td>   
        <td class="edit" onclick="updateData(${i})" ><i class="fa-solid fa-pen-to-square"></i></td>
        <td onclick="deleResto(${i})" class="delete"><i class="fa-solid fa-xmark"></i></td>
         </tr>`;
    }
    document.getElementById("tbody").innerHTML += table;
}
showData();

function deleResto(i) {
    new_restos.splice(i, 1);
    localStorage.restos = JSON.stringify(new_restos);
    showData();
}
let update = false;
let temp;
function updateData(i) {

    resto_name.value = new_restos[i].name;
    phone_number.value = new_restos[i].phone_number;
    cate.value = new_restos[i].cate;
    city.value = new_restos[i].city;
    //description.value = new_restos[i].description;
    create.innerHTML = "Update"
    update = true;
    temp = i;
    scroll({
        top: 0, behavior: "smooth"
    })
}