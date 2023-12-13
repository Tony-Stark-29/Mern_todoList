const express = require("express");
const {
  createTodolist,
  getTodolist,
  getAllTodolist,
  updateTodolist,
  deleteTodolist,
} = require("../controllers/todolistControllers");

const router = express.Router();

router.route("/").get(getAllTodolist).post(createTodolist);
router
  .route("/:id")
  .get(getTodolist)
  .patch(updateTodolist)
  .delete(deleteTodolist);

module.exports = router;
