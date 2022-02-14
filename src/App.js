import { useState } from "react";
import Tasks from "./components/Tasks";
import TaskCard from "./components/TaskCard";
import "./index.css";
import AddInput from "./components/AddInput";
import { ReactComponent as AddSolidIcon } from "./images/add-solid.svg";

function App() {
  const [addListCard, setAddListCard] = useState(false);
  const [cardTitle, setCardTitle] = useState();

  const [listData, setListData] = useState([
    {
      listName: "groceries",
      list: [
        { task: "tomatos", complete: "task-complete", checked: true },
        { task: "bacon", complete: "task-complete", checked: true },
        { task: "mushrooms", complete: "task-complete", checked: true },
      ],
    },
  ]);

  const toggleListForm = () => {
    addListCard ? setAddListCard(false) : setAddListCard(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target[0].value) {
      toggleListForm();
      return;
    }

    setListData((prev) => [...prev, { listName: cardTitle, list: [] }]);
    setCardTitle("");
    toggleListForm();
  };
  console.log("pizza", listData);

  console.log("cardtitle", cardTitle);
  return (
    <div className="app">
      <nav>
        <div>{"   . "}</div>
        <h1>Todo List</h1>
        <AddSolidIcon className="add-solid-icon-nav" onClick={toggleListForm} />
      </nav>
      {addListCard && (
        <div className="new-list-input">
          <form onSubmit={(e) => handleSubmit(e)}>
            <AddInput
              placeholder={"List Name"}
              name={"newList"}
              onChange={setCardTitle}
              value={cardTitle}
            />
            <button className="form-button" type="submit" value="submit">
              Add List
            </button>
          </form>
        </div>
      )}
      <Tasks listData={listData} setListData={setListData} />
      {/* <TaskCard /> */}
    </div>
  );
}

export default App;
