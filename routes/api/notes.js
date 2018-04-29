const router = require("express").Router();
const notesController = require("../../controllers/noteControllers");

// Matches with "/api/books"
router.route("/")
  .get(notesController.findAll)
  .post(notesController.create);

// Matches with "/api/notes/:id"
router
  .route("/:id")
  .get(notesController.findById)
  .put(notesController.update)
  .delete(notesController.remove);

  //Matches with "/api/notes/track/:track"
router
  .route('/track/:track')
  .get(notesController.findByTrack);

module.exports = router;
