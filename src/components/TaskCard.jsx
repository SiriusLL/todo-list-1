import React, { useState } from "react";

function TaskCard() {
  const [addTask, setAddTask] = useState(false);

  const [newTask, setNewTask] = useState();

  const [listData, setListData] = useState([]);

  const toggleTaskForm = () => {
    addTask ? setAddTask(false) : setAddTask(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newTask);

    setListData((prev) => [...prev, newTask]);
    console.log(listData);
    setNewTask("");
    toggleTaskForm();
  };

  console.log(addTask);

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
                  <p>X</p>
                  <p className="task">{task}</p>
                  <input className="check-box" type="checkbox" />
                </div>
              );
            })}
        </div>
      </form>
      {!addTask && <button onClick={toggleTaskForm}>++</button>}
      {newTask}
      {addTask && (
        <form className="add-task-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="enter a task"
            name="newTask"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button type="submit" value="submit" />
        </form>
      )}
    </div>
  );
}

export default TaskCard;
