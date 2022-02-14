import React, { useState } from "react";

import CardForm from "./CardForm";
import TaskForm from "./TaskForm";

function TaskCard({ listData, setListData, list, listName, cardIndex }) {
  console.log("h", listData);
  // const [checked, setChecked] = useState({});

  const cancelTask = (i) => {
    console.log("you are here");
    console.log("i", i);
    setListData(listData.list.filter((task) => task !== listData[i]));
  };

  const handleChecked = (e, i) => {
    const newListData = [...listData];

    if (e.target.checked) {
      newListData[cardIndex].list[i].complete = "task-complete";
      newListData[cardIndex].list[i].checked = true;
      setListData((prev) => newListData);
      return;
    }
    newListData[cardIndex].list[i].complete = "task";
    newListData[cardIndex].list[i].checked = false;
    setListData((prev) => newListData);
  };

  return (
    <div className="task-card">
      <h2>{listName}</h2>
      <p className="divider">
        <span>List</span>
      </p>
      <TaskForm
        handleChecked={handleChecked}
        listData={listData}
        setListData={setListData}
        cardIndex={cardIndex}
      />
      {/* {newTask} */}
      <CardForm
        listData={listData}
        setListData={setListData}
        cardIndex={cardIndex}
      />
    </div>
  );
}

export default TaskCard;
