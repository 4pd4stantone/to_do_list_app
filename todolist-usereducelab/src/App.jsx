import "./styles.css";
import ToDoList from "./ToDoList.jsx";
import Form from "./Form.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>To-do List App</h1>
      <Form />
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
    </div>
  );
}

