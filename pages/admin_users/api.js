
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

const id = users = response.data[0].user_id
const f_name = users = response.data[0].first_name
const l_name = users = response.data[0].last_name
const gender = users = response.data[0].gender
const email = users = response.data[0].email
const password = users = response.data[0].password
const phone_number = users = response.data[0].phone_number
const city_id = users = response.data[0].city_id
const image = users = response.data[0].image
const is_admin = users = response.data[0].is_admin

// identify variables

