import axios from "axios";
const apiBase = "http://127.0.0.1:3001";
const ObjectID = require("bson").ObjectID;

// const listId = new ObjectID();

const GetLists = (setListData) => {
  axios(`${apiBase}/lists`)
    .then((response) => {
      setListData(response.data);
    })
    .catch((error) => console.log("Axios Error: ", error));
};

const PostNewList = (cardTitle, setRender) => {
  axios
    .post(
      `${apiBase}/list/new`,
      {
        listName: cardTitle,
      }
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    )
    .then((response) => {
      console.log("PR", response);
      // setRender(true);
    })
    .catch((error) => console.log("postError: ", error));
};

const deleteCard = (id) => {
  axios
    .delete(`${apiBase}/list/delete/${id}`)
    .then((response) => console.log("DR", response))
    .catch((error) => console.log("deleteError: ", error));
};

const addNewTask = (id, newTaskId, newTask) => {
  // console.log("nt", id);
  axios
    .put(`${apiBase}/list/add/${id}/${newTaskId}`, {
      taskId: newTaskId,
      task: newTask,
    })
    .then((response) => console.log("PR", response))
    .catch((error) => console.log("editError: ", error));
};

const removeTask = (listId, taskId) => {
  console.log(listId, taskId);
  axios.put(`${apiBase}/list/remove/${listId}/${taskId}`);
};

const completeTask = (id, taskId, complete, checked) => {
  console.log("id", id, taskId, complete, checked);
  axios
    .put(`${apiBase}/list/complete/${id}/${taskId}`, {
      complete,
      checked,
    })
    .then((response) => console.log("PR", response))
    .catch((error) => console.log("editError: ", error));
};

export {
  GetLists,
  PostNewList,
  deleteCard,
  addNewTask,
  removeTask,
  completeTask,
};
