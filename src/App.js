import { useState, useEffect } from "react";
import axios from "axios";
import Tasks from "./components/Tasks";
import TaskCard from "./components/TaskCard";
import "./index.css";
import AddInput from "./components/AddInput";
import { ReactComponent as AddSolidIcon } from "./images/add-solid.svg";
import { GetLists, PostNewList } from "./helpers/api";

const apiBase = "http://127.0.0.1:3001";

function App() {
  const [addListCard, setAddListCard] = useState(false);
  const [cardTitle, setCardTitle] = useState();

  const [listData, setListData] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    GetLists(setListData);
    setRender(false);
  }, [render]);

  // const GetLists = () => {
  //   // fetch(`${apiBase}/lists`)
  //   //   .then((res) => {
  //   //     console.log("r", res);
  //   //     res.json();
  //   //   })
  //   //   .then((data) => console.log("D", data))
  //   //   .catch((error) => console.error("Error fetching: ", error));
  //   axios(`${apiBase}/lists`)
  //     .then((response) => {
  //       setListData(response.data);
  //     })
  //     .catch((error) => console.log("Axios Error: ", error));
  // };

  // const PostNewList = () => {
  //   axios
  //     .post(
  //       `${apiBase}/list/new`,
  //       {
  //         listName: cardTitle,
  //       }
  //       // {
  //       //   headers: {
  //       //     "Content-Type": "application/json",
  //       //   },
  //       // }
  //     )
  //     .then((response) => console.log("PR", response))
  //     .catch((error) => console.log("postError: ", error));
  // };

  listData.length > 0 && console.log("data", listData);

  const toggleListForm = () => {
    addListCard ? setAddListCard(false) : setAddListCard(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target[0].value) {
      toggleListForm();
      return;
    }

    PostNewList(cardTitle, setRender);
    setListData((prev) => [...prev, { listName: cardTitle, list: [] }]);
    setCardTitle("");
    toggleListForm();
  };

  return (
    <div className="app">
      <nav>
        <div>
          <AddSolidIcon className="centerNav" />
        </div>
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
