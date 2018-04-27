const router = require("express").Router();
const usersController = require("../controllers/usersController");
let User = require('../models/user');

// Matches with "/api/register"
router.get('/register', function (req, res) {
    res.render('register');
});
router.get('/login', function (req, res) {
    res.render('login');
});

router.post('/register', function (req, res) {
    let newUser = User;
    console.log("In the user post request");

});

module.exports = router;