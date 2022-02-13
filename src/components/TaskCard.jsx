import React, { useState } from "react";

import CardForm from "./CardForm";
import TaskForm from "./TaskForm";

function TaskCard() {
  const [listData, setListData] = useState([
    { task: "tomatos", complete: "task-complete", checked: true },
    { task: "bacon", complete: "task-complete", checked: true },
    { task: "mushrooms", complete: "task-complete", checked: true },
  ]);

  // const [checked, setChecked] = useState({});

  const cancelTask = (i) => {
    console.log("you are here");
    console.log("i", i);
    setListData(listData.filter((task) => task !== listData[i]));
  };

  const handleChecked = (e, i) => {
    const newListData = [...listData];

    if (e.target.checked) {
      newListData[i].complete = "task-complete";
      newListData[i].checked = true;
      setListData((prev) => newListData);
      return;
    }
    newListData[i].complete = "task";
    newListData[i].checked = false;
    setListData((prev) => newListData);
  };

  return (
    <div className="task-card">
      <h2>Task Name</h2>
      <p className="divider">
        <span>List</span>
      </p>
      <TaskForm
        handleChecked={handleChecked}
        listData={listData}
        setListData={setListData}
      />
      {/* {newTask} */}
      <CardForm listData={listData} setListData={setListData} />
    </div>
  );
}

export default TaskCard;
