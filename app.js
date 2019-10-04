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

    console.log(id);

    users.forEach((user)=>{
        user.userId === +id ? res.render('user', {username:` ${user.userName}`, userEmail: `${user.email}`, userId: `${user.userId}`})
            : res.end('No such user in base');
    });
});

app.get('/register', (req, res) =>{
    res.render('register');
});

app.get('/house/:id', (req, res)=>{
    const {id} = req.params;

    houses.forEach((house)=>{
        house.houseId === +id ? res.render('house', {city:`${house.city}`, meters:`${house.meters}`, price:`${house.price}`, street:`${house.street}`})
            : res.end('No house user in base');
    });
});

app.get('/houseCreator', (req,res)=>{
    res.render('houseCreator');
});

app.post('/login', (req, res) => {
    const loginData = req.body;

    console.log(loginData);

    users.forEach((user)=>{
        user.email === loginData.userEmail && user.userPass === loginData.userPass ? res.redirect(`user/${user.userId}`)
            :res.render('login', {try: 'Your email or password may be incorrect'});
    });
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