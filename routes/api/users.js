const router = require("express").Router();
const usersController = require("../../controllers/usersControllers");
const passport = require("../../config/passport");

router.route("/")
    .post(usersController.create);

router.route("/login")
    .post(passport.authenticate("local"), (req, res) => {
        // This function will run if authentication is successful and send back the user's email and id
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

module.exports = router;