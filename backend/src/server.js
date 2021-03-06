//  imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const routes = require('./routes');

//  create server express
const server = express();
//  create mongoose connection with DB
mongoose.connect('mongodb+srv://omnistack:omnistack@clusterzetta-mcozz.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true })

server.use(cors());
//  express standard is not json
server.use(express.json());
//  use routes in app
server.use(routes);

//  server port
server.listen(3333);

//  "yarn dev" to start node server
