const userDB = require('../models/User.js');

const LocalStrategy = require('passport-local').Strategy

const localAuth = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        let User = await userDB.findOne({ username: username });

        try {
            if (!User) {
                return done(null, false);
            }
            if (User.password != password) {
                return done(null, false);
            }
            return done(null, User)

        } catch (error) {
            return done(error, false);
        }
    }));

    passport.serializeUser((User, done) => {
        return done(null, User.id);
    })

    passport.deserializeUser(async (id, done) => {
        let User = await userDB.findById(id);
        return done(null, User)
    })
}

const userAuth = (req, res, next) => {

    // let { user } = req.cookies;

    let  user  = req.user;
    console.log(user);
    if (user) {
        next()
    } else {
        return res.redirect('/login');
    }
}

module.exports = {localAuth, userAuth};