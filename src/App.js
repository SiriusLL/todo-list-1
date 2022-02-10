import "./index.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="task-card">
        <h2>Task Name</h2>
        <p className="divider">
          <span>List</span>
        </p>
        <form className="todo-form">
          <div className="check-complete">
            <p>X</p>
            <p>placeholderplaceholder</p>
            <input className="check-box" type="checkbox" />
          </div>
        </form>
        <button>Add</button>
      </div>
    </div>
  );
}

export default App;
