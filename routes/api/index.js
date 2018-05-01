const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const noteRoutes = require("./notes");


// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/notes", noteRoutes)

module.exports = router;
