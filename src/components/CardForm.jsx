import React, { useState } from "react";
import { ReactComponent as AddSolidIcon } from "../images/add-solid.svg";

function CardForm({ listData, setListData }) {
  const [newTask, setNewTask] = useState();
  const [addTask, setAddTask] = useState(false);

  const toggleTaskForm = () => {
    addTask ? setAddTask(false) : setAddTask(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target[0].value) {
      toggleTaskForm();
      return;
    }

    setListData((prev) => [
      ...prev,
      { task: newTask, complete: "task", checked: "checked" },
    ]);
    console.log(listData);
    setNewTask("");
    toggleTaskForm();
  };

  return (
    <>
      {" "}
      {!addTask && (
        <button className="add-icon-button" onClick={toggleTaskForm} autoFocus>
          <AddSolidIcon name="Add Solid Icon" className="add-solid-icon" />
        </button>
      )}
      {addTask && (
        <form className="add-task-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            autoFocus
            className="add-task-input"
            type="text"
            placeholder="enter a task"
            name="newTask"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button type="submit" value="submit">
            Add Task
          </button>
        </form>
      )}
    </>
  );
}

export default CardForm;
