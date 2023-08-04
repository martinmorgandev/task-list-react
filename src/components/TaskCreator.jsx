import React, { useState} from "react";

function TaskCreator({createNewTask}) {

  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    localStorage.setItem("task", newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-8">
      <input
        type="text"
        placeholder="enter a new task2"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className="form-control"
      ></input>
      </div>
      <div className="col-4">
        <button className="btn btn-primary btn-sm" type="submit">Save task</button>
      </div>
    </form>
  );
}

export default TaskCreator;
