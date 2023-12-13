const todolist = require("../model/todolist");
const mongoose=require("mongoose");

const createTodolist = async (req, res) => {
  const { todo_title, todo_description, todo_date } = req.body;

  try {
    const newList = await todolist.create({
      todo_title,
      todo_description,
      todo_date,
    });
    res.status(200).json(newList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTodolist = async(req,res) => {

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error:"Invalid Id"})
    }

    const todo=await todolist.findById(id);

    if(!todo) res.status(404).json({error:"No Data Found"});

    res.status(200).json(todo);


};


const getAllTodolist = async (req, res) => {
  try {
    const lists = await todolist.find({}).sort({ createdAr: -1 });
    res.status(200).json(lists);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateTodolist = async (req,res) => {

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error:"Invalid Id"})
    }
 
    const todo=await todolist.findByIdAndUpdate({_id:id},{...req.body})

    if(!todo)
    {
        res.send(400).json({error:"No such data found to update"});

    }

    res.status(200).json(todo);
};
const deleteTodolist = async(req,res) => {

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({error:"Invalid Id"})
    }
 
    const todo=await todolist.findByIdAndDelete({_id:id});
    
    if(!todo) 
    {
        res.status(400).json({error:"No susch data found on Db"});
    }

    res.status(200).json(todo);
    

};

module.exports = {
  createTodolist,
  getTodolist,
  getAllTodolist,
  updateTodolist,
  deleteTodolist,
};
