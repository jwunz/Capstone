const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const chatrooms = require('./routes/api/chatrooms');
const users = require('./routes/api/users');
const clubs = require('./routes/api/clubs');

const app = express();

var http = require('http').Server(app);
var io = require('socket.io').listen(http);

var POSSIBLE_NAMES = [  
  "Penguin",
  "Church",
  "Caboose",
  "Pinky",
  "Doc",
  "Oregon",
  "Tex",
  "Wash",
  "Cal",
  "Conn",
  "North",
  "South",
  "O'Malley",
  "Marty",
  "Barry",
  "Allen",
  "Oliver",
  "Queen",
  "King",
  "Prince",
  "Princess",
  "Cloud",
  "Chief"
];

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/chatrooms', chatrooms)
app.use('/api/clubs', clubs)
app.use('/api/users', users)


var connectedUsers = [];

io.on('connection', function(socket) {
  var nameNum = Math.round(Math.random() * (POSSIBLE_NAMES.length - 1));

  connectedUsers.push({
    id: socket.id,
    name: POSSIBLE_NAMES[nameNum]
  });

  io.emit('usersUpdate', connectedUsers);

  socket.on('disconnect', function() {
    index = connectedUsers.findIndex(x => x.id === socket.id);

    if (index > -1) {
        connectedUsers.splice(index, 1);
    }

    io.emit('usersUpdate', connectedUsers);
  });

  socket.on('message', function(message) {
    toSend = {
      sender: POSSIBLE_NAMES[nameNum],
      message: message
    };

    io.emit('newMessage', toSend);
  });

  console.log(connectedUsers);
})


const port = process.env.PORT || 5000;
const sioPort = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
io.listen(sioPort, () => console.log(`Socket.io is running on port ${sioPort}!`));