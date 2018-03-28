let express = require('express');
let app = express();
let db = require('./data/db');
db();   // establish connection

let userService = require('./services/user.service.server');
userService(app);

app.listen(3000);