const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");


router.get (["/", "/login"], (req, res) => {
    res.render("login")
});
router.get ("/register", (req, res) => {
    res.render("register")
});
router.get ("/profile", userController.isLoggedin, (req, res) => {
    if (req.user) {
        res.render("profile", {user: req.user});
    } else {
        res.redirect("/login");
    }
});
router.get ("/home", userController.isLoggedin, (req, res) => {
    // console.log(req.name);
    if (req.user) {
        res.render("home", {user: req.user});
    } else {
        res.redirect("/login");
    }
});

module.exports = router;