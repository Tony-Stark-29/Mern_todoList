const express = require("express");
const {
  createTodolist,
  getTodolist,
  getAllTodolist,
  updateTodolist,
  deleteTodolist,
} = require("../controllers/todolistControllers");
const requireAuth=require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.route("/").get(getAllTodolist).post(createTodolist);
router
  .route("/:id")
  .get(getTodolist)
  .patch(updateTodolist)
  .delete(deleteTodolist);

module.exports = router;
