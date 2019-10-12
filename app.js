const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();
const db = require('./database').getInstance();

db.setModels();

app.use(express.static(path.join(__dirname ,'static')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('hbs', expHbs({
    defaultLayout: null,
}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname ,'static'));

let { render404, renderMain} = require('./render');
let { userRouter, houseRouter, authRouter } = require('./router');


app.get('/', renderMain);

//users

app.use('/register', userRouter.userRegister);

app.use('/auth', authRouter.userLogin);

app.use('/users', userRouter.getUser);

//houses

app.use('/houses', houseRouter.getHouse);

//miscellaneous

app.all('*', render404);

app.listen(3000, ()=>{});