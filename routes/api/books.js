const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router.route("/:id")
    .delete(booksController.remove);

router.route("/:userId")
    .post(booksController.create)
    .get(booksController.findAll);

module.exports = router;
