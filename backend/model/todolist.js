const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoListSchema = new Schema(
  {
    todo_title: {
      type: String,
      required: true,
    },
    todo_description: {
      type: String,
      required: true,
    },
    todo_date: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todolist", todoListSchema);
