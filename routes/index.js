const express = require('express');
const { getblogs, getblogById, addblog, createblog, editblog, updateblog, deleteblog, logout, signupPage, signup, loginPage, login } = require('../controllers/BlogController');
const router = express.Router();
const passport = require("passport");
const { userAuth } = require('../middleware/local.middleware');

router.get('/', userAuth, getblogs); 
router.get('/blog/:id', getblogById);
router.get('/add-blog', addblog);
router.post('/add-blog', createblog);
router.get('/edit-blog/:id', editblog);
router.post('/edit-blog/:id', updateblog);
router.post('/delete-blog/:id', deleteblog);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

// router.post('/login', login);
router.get('/login', login);
router.post('/signup', signup);
router.get('/signup', signupPage);
router.get('/logout', logout);
module.exports = router;


