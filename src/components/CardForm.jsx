import React, { useState } from "react";
import { ReactComponent as AddSolidIcon } from "../images/add-solid.svg";
import AddInput from "./AddInput";

function CardForm({ listData, setListData, cardIndex }) {
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

    const newListData = [...listData];
    newListData[cardIndex].list.push({
      task: newTask,
      complete: "task",
      checked: false,
    });

    setListData((prev) => newListData);
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
          <button className="form-button" type="submit" value="submit">
            Add Task
          </button>
        </form>
      )}
    </>
  );
}

export default CardForm;
