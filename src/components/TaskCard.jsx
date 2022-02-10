import React, { useState } from "react";

function TaskCard() {
  const [addTask, setAddTask] = useState(false);

  const toggleTaskForm = () => {
    addTask ? setAddTask(false) : setAddTask(true);
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
          <p>X</p>
          <p>placeholderplaceholder</p>
          <input className="check-box" type="checkbox" />
        </div>
      </form>
      {!addTask && <button onClick={toggleTaskForm}>+{`${addTask}`}</button>}
      {addTask && (
        <form className="add-task-form">
          <input type="text" placeholder="enter a task" />
          <button onClick={toggleTaskForm}>Add Task</button>
        </form>
      )}
    </div>
  );
}

export default TaskCard;
