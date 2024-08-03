const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();
const passport = require('passport');
const session = require('express-session');
const {localAuth} = require('./middleware/local.middleware');

localAuth(passport);
connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/assets')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: "key", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));
 
const PORT = 3510;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
