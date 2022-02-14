import React from "react";
import CheckInput from "./CheckInput";
import { ReactComponent as CloseOutlineIcon } from "../images/close-outline.svg";

function TaskForm({ handleChecked, listData, setListData, cardIndex }) {
  // console.log("p", cardIndex);

  const cancelTask = (i) => {
    const newListData = [...listData];
    const newList = newListData[cardIndex].list.filter(
      (task) => task !== listData.list[i]
    );

    newListData[cardIndex].list = newList;
    setListData(newListData);
  };

  return (
    <>
      <form className="todo-form">
        <div className="check-complete">
          {/* {listData[cardIndex].list.name} */}
          {listData[cardIndex].list &&
            listData[cardIndex].list.map((task, i) => {
              console.log("filter", listData[cardIndex]);
              return (
                <div className="task-row" key={i}>
                  <p
                    className="cancel"
                    type="button"
                    onClick={() => {
                      const newListData = [...listData];
                      const newList = newListData[cardIndex].list.filter(
                        (task) => task !== listData[cardIndex].list[i]
                      );

                      newListData[cardIndex].list = newList;

                      setListData(newListData);
                    }}
                  >
                    <CloseOutlineIcon
                      title="Close Outline Icon"
                      className="cancel-icon"
                    />
                  </p>
                  <p className={`${task.complete}`}>{task.task}</p>
                  {/* <input
                    className={`${task.checked}`}
                    type="checkbox"
                    onClick={(e) => handleChecked(e, i)}
                    checked={task.checked}
                  /> */}
                  <CheckInput
                    task={task}
                    handleChecked={handleChecked}
                    check={task.checked}
                    i={i}
                  />
                </div>
              );
            })}
        </div>
      </form>
    </>
  );
}

export default TaskForm;
