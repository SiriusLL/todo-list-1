import React, { useState } from "react";
import { deleteCard } from "../helpers/api";

import CardForm from "./CardForm";
import TaskForm from "./TaskForm";
import { ReactComponent as CloseOutlineIcon } from "../images/close-outline.svg";

function TaskCard({
  listData,
  setListData,
  list,
  listName,
  cardIndex,
  id,
  setRender,
}) {
  // console.log("h", listData, "id", id);
  // const [checked, setChecked] = useState({});

  const cancelList = (i, id) => {
    deleteCard(id);
    const newListData = [...listData];
    const newCard = newListData.filter((task) => task._id !== id);
    setListData((prev) => newCard);
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
  // console.log(
  //   "pep",
  //   listData.filter((task) => {
  //     console.log("tt", task);
  //   })
  // );
  // console.log("star", listData[cardIndex]);
  return (
    <div className="task-card">
      <div className="task-card-header">
        <div>
          <CloseOutlineIcon className="listCenter" />
        </div>
        <h2>{listName}</h2>
        <CloseOutlineIcon
          className="cancel-icon"
          onClick={() => {
            cancelList(cardIndex, id);
          }}
        />
      </div>
      <p className="divider">
        <span>List</span>
      </p>
      <TaskForm
        handleChecked={handleChecked}
        listData={listData}
        setListData={setListData}
        cardIndex={cardIndex}
        id={id}
      />
      {/* {newTask} */}
      <CardForm
        listData={listData}
        setListData={setListData}
        cardIndex={cardIndex}
        id={id}
        setRender={setRender}
      />
    </div>
  );
}

export default TaskCard;
