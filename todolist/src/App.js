import "./App.css";
import { useState } from "react";

function App() {
  let [todoList, setTodoList] = useState([]);

  let saveToDoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value.trim();
    if (!toname) return;

    if (!todoList.includes(toname)) {
      let finalDolist = [...todoList, toname];
      setTodoList(finalDolist);
      event.target.toname.value = ""; // Clear input after saving
    } else {
      alert("ToDo Name Already Exists...");
    }
  };

  let list = todoList.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todoList, setTodoList }) {
  let [status, setStatus] = useState(false);

  let deleteRow = (e) => {
    e.stopPropagation(); // Prevents triggering `checkStatus` when clicking the delete
    let finalData = todoList.filter((v, i) => i !== indexNumber);
    setTodoList(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1}. {value}
      <span
        onClick={deleteRow}>
       
        &times;
      </span>
    </li>
  );
}
