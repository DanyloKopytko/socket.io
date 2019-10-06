const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname ,'static')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('hbs', expHbs({
    defaultLayout: null,
}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname ,'static'));

let users = [];

let houses = [];

let userId = 0;

let houseId = 0;

app.get('/', (req, res) =>{
    res.render('main');
});

app.get('/login', (req, res) =>{
    res.render('login');
});

app.get('/user/:id', (req, res) =>{
    const {id} = req.params;

    let idExist = false;
    let neededUser = 0;

    console.log(id);

    users.forEach((user)=>{
        if (user.userId === +id) {
            idExist = true;
            neededUser = user.userId;
        }
    });

    idExist? res.render('user', {username:` ${users[neededUser].userName}`, userEmail: `${users[neededUser].email}`, userId: `${users[neededUser].userId}`})
        : res.render('login');
});

app.get('/register', (req, res) =>{
    res.render('register');
});

app.get('/house/:id', (req, res)=>{
    const {id} = req.params;

    let idExist = false;
    let neededHouse = 0;

    houses.forEach((house)=>{
        if (house.houseId === +id) {
            idExist = true;
            neededHouse = house.houseId;
        }
    });

    idExist? res.render('house', {city:`${houses[neededHouse].city}`, meters:`${houses[neededHouse].meters}`, price:`${houses[neededHouse].price}`, street:`${houses[neededHouse].street}`})
        : res.end('No such house in base');
});

app.get('/houseCreator', (req,res)=>{
    res.render('houseCreator');
});

app.post('/login', (req, res) => {
    const loginData = req.body;

    let userExist = false;
    let neededUser = 0;

    console.log(loginData);

    users.forEach((user)=>{
        if (user.email === loginData.userEmail && user.userPass === loginData.userPass) {
            neededUser = user.userId;
            userExist = true;
        }
    });

    userExist? res.redirect(`user/${users[neededUser].userId}`)
        :res.render('login', {try: 'Your email or password may be incorrect'});
});

app.post('/register', (req, res) => {
    const userData = req.body;

    users.push(userData);

    users[userId].userId = userId;

    userId++;

    console.log(users);

    res.render('login');
});

app.post('/houseCreator', (req, res) => {
    const houseData = req.body;

    console.log(houseData);

    houses.push(houseData);

    houses[houseId].houseId = houseId;

    console.log(houses);

    res.redirect(`house/${houseId}`);

    houseId++;
});


app.all('*', (req, res) => {
    res.end('Error 404');
});

app.listen(3000, ()=>{
    console.log('Proslushka poshla');
});