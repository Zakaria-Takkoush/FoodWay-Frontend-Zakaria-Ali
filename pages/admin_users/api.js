
let data = new FormData();
    axios({
        method: 'get',
        url: 'http://localhost/FoodWay-Backend/get_users.php',
        data: data,
    })
    .then(function (response) {
        users = response.data;
        console.log(response.data);
       // console.log(response.data[0].first_name)
       // console.log(response.data[1].user_id)
        }
    )

const id = users = response.data[i].user_id
const f_name = users = response.data[i].first_name
const l_name = users = response.data[i].last_name
const gender = users = response.data[i].gender
const email = users = response.data[i].email
const password = users = response.data[i].password
const phone_number = users = response.data[i].phone_number
const city_id = users = response.data[i].city_id
const image = users = response.data[i].image
const is_admin = users = response.data[i].is_admin

// identify variables

