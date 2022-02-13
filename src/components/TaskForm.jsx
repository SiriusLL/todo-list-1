import React from "react";
import CheckInput from "./CheckInput";
import { ReactComponent as CloseOutlineIcon } from "../images/close-outline.svg";

function TaskForm({ handleChecked, listData, setListData }) {
  console.log({ listData });

  return (
    <>
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
