import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./Todo";
import { Todo_Wrapper } from "./Todo_App/Todo_Wrapper";
import { Todo_Form } from "./Todo_App/Todo_Form";

function App() {
  return (
    <div className="App">
      <Todo_Wrapper />
    </div>
  );
}

export default App;
