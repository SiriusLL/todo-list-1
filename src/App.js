import { useState } from "react";
import TaskCard from "./components/TaskCard";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
      </header>
      <TaskCard />
    </div>
  );
}

export default App;
