import React from "react";
import TaskCard from "./TaskCard";

function Tasks({ listData, setListData, setRender }) {
  // console.log("q", listData);
  return (
    <div className="main">
      {listData.map((card, cardIndex) => {
        // console.log("hello", card);
        return (
          <TaskCard
            key={card._id}
            listData={listData}
            setListData={setListData}
            listName={card.listName}
            list={card.list}
            cardIndex={cardIndex}
            id={card._id}
            setRender={setRender}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
