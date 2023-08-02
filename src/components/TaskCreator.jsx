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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter a new task2"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      ></input>
      <button type="submit">Save task</button>
    </form>
  );
}

export default TaskCreator;
