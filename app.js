const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
const db = require('./database').getInstance();

db.setModels();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', socket => {
    (global.currentUser === undefined)? socket.id = 'Guest': socket.id = global.currentUser;

    socket.broadcast.emit('userCon', {id: socket.id});

    socket.on('sendMsgToAll', data => {
        io.emit('resToAll', {id: socket.id, data});
    });

    socket.on('joinRoom', data => {
        socket.join(data.room_id);
    });

    socket.on('msgToRoom', data => {
        io.to(data.room_id).emit('sendMsgToRoom', {id: socket.id, data: data.data});
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('userDisc', {id: socket.id});
    });
});

app.use(express.static(path.join(__dirname , 'static')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

global.appRoot = __dirname;

app.engine('hbs', expHbs({
    defaultLayout: null,
}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname , 'static'));

const { render404, renderMain, renderSupport, renderUser } = require('./render');
const { userRouter, houseRouter, authRouter } = require('./router');

app.get('/', renderMain);

//users

app.get('/register', renderUser.register);

app.use('/auth', authRouter.userLogin);

app.use('/users', userRouter.getUser);

app.get('/support', renderSupport);

//houses

app.use('/houses', houseRouter.getHouse);

//miscellaneous

app.all('*', render404);

http.listen(3000, () => {
    console.log('3000');
});