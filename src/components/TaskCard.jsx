import React, { useState } from "react";
import { ReactComponent as CloseOutlineIcon } from "../images/close-outline.svg";
import { ReactComponent as AddSolidIcon } from "../images/add-solid.svg";

function TaskCard() {
  const [addTask, setAddTask] = useState(false);

  const [newTask, setNewTask] = useState();

  const [listData, setListData] = useState([
    { task: "tomatos", complete: "task-complete", Checked: "checked" },
    { task: "bacon", complete: "task-complete", Checked: "checked" },
    { task: "mushrooms", complete: "task-complete", checked: "checked" },
  ]);

  // const [checked, setChecked] = useState({});

  const toggleTaskForm = () => {
    addTask ? setAddTask(false) : setAddTask(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newTask);
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

  const cancelTask = (i) => {
    console.log("you are here");
    console.log("i", i);
    setListData(listData.filter((task) => task !== listData[i]));
  };

  const handleChecked = (e, i) => {
    const newListData = [...listData];

    if (e.target.checked) {
      newListData[i].complete = "task-complete";
      newListData[i].checked = "checked";
      setListData((prev) => newListData);
      return;
    }
    newListData[i].complete = "task";
    newListData[i].checked = "";
    setListData((prev) => newListData);
  };

  return (
    <div className="task-card">
      <h2>Task Name</h2>
      <p className="divider">
        <span>List</span>
      </p>
      <form className="todo-form">
        <div className="check-complete">
          {listData &&
            listData.map((task, i) => {
              return (
                <div className="task-row" key={i}>
                  <p
                    className="cancel"
                    type="button"
                    onClick={() =>
                      setListData(
                        listData.filter((task) => task !== listData[i])
                      )
                    }
                  >
                    <CloseOutlineIcon
                      title="Close Outline Icon"
                      className="cancel-icon"
                    />
                  </p>
                  <p className={`${task.complete}`}>{task.task}</p>
                  {task.complete === "task-complete" ? (
                    <input
                      className={`${task.checked}`}
                      type="checkbox"
                      onClick={(e) => handleChecked(e, i)}
                      checked
                    />
                  ) : (
                    <input
                      className={`${task.checked}`}
                      type="checkbox"
                      onClick={(e) => handleChecked(e, i)}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </form>
      {!addTask && (
        <button className="add-icon-button" onClick={toggleTaskForm} autoFocus>
          <AddSolidIcon name="Add Solid Icon" className="add-solid-icon" />
        </button>
      )}
      {newTask}
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
    </div>
  );
}

export default TaskCard;
