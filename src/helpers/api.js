import axios from "axios";
const apiBase = "http://127.0.0.1:3001";

const GetLists = (setListData) => {
  // fetch(`${apiBase}/lists`)
  //   .then((res) => {
  //     console.log("r", res);
  //     res.json();
  //   })
  //   .then((data) => console.log("D", data))
  //   .catch((error) => console.error("Error fetching: ", error));
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
      setRender(true);
    })
    .catch((error) => console.log("postError: ", error));
};

const deleteCard = (id) => {
  axios
    .delete(`${apiBase}/list/delete/${id}`)
    .then((response) => console.log("DR", response))
    .catch((error) => console.log("deleteError: ", error));
};

const addNewTask = (id, newTask) => {
  // console.log("nt", id);
  axios
    .put(`${apiBase}/list/add/${id}`, {
      task: newTask,
    })
    .then((response) => console.log("PR", response))
    .catch((error) => console.log("editError: ", error));
};

export { GetLists, PostNewList, deleteCard, addNewTask };
