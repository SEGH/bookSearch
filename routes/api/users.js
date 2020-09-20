const router = require("express").Router();
const usersController = require("../../controllers/usersControllers");

router.route("/")
    .post(usersController.create);

module.exports = router;