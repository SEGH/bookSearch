const router = require("express").Router();
const usersController = require("../../controllers/usersControllers");
const passport = require("../../config/passport");

router.route("/")
    .get(usersController.getUser);

router.route("/register")
    .post(usersController.create);

router.route("/login")
    .post(passport.authenticate("local"), (req, res) => {
        // This function will run if authentication is successful and send back the user's email and id
        console.log(req.user.email);
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

router.route("/logout")
    .get(usersController.logout);

module.exports = router;