import React from "react";
import TaskCard from "./TaskCard";

function Tasks({ listData, setListData }) {
  console.log("q", listData);
  return (
    <div className="main">
      {listData.map((card, cardIndex) => {
        return (
          <TaskCard
            listData={listData}
            setListData={setListData}
            listName={card.listName}
            list={card.list}
            cardIndex={cardIndex}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
