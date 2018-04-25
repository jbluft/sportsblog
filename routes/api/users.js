const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/register"
router.route("/")
    .get(usersController.register)
    .post(usersController.create);

// Matches with "/api/books/:id"
// router
//     .route("/:id")
//     .get(booksController.findById)
//     .put(booksController.update)
//     .delete(booksController.remove);

module.exports = router;
