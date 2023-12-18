import React, { useState } from "react";
import { useTodoData } from "../hooks/useTodoData";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const { addData, err: error, isLoading,setErr } = useTodoData();

  const handleSubmit = async (e) => {
    e.preventDefault();

    addData(title, description, date);
    setTitle("");
    setDescription("");
    setDate("");
  };
  return (
    <form
      className=" col-12 col-md-8 col-ls-6 p-5 justify-content-center shadow-2"
      onSubmit={handleSubmit}
      onFocus={()=>{setErr(null)}}
    >
      <h3>New Task</h3>
      <input
        className="form-control my-3"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="form-control my-3"
        type="date"
        placeholder="End date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="btn btn-primary" disabled={isLoading} type="submit">
        Add
      </button>
      {error && <div className="text-danger">{error}</div>}
    </form>
  );
};
