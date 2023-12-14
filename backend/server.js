require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const todoListRouter = require("./routes/todoList");
const userRouter = require("./routes/user");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.baseUrl} ${req.method}`);
  next();
});

app.use("/api/todolist", todoListRouter);
app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Listening at PORT:", PORT);
    });
  })
  .catch((err) => console.log(err.message));
