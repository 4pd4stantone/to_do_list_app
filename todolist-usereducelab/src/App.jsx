import "./styles.css";
import Form from "./Form.jsx";
import logo from "./assets/todolist-logo.png"

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="to do list logo" id="logo"/>
        <h1 id="title">To-Do List App</h1>
      </header>
      <Form />
    </div>
  );
}

