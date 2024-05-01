import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import "./App.css";

import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { addTodo, deleteTodo, editTodo, finishTodo } from "./Slices/todoSlice";

function App() {
  const disptach = useDispatch();
  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, finishTodo },
    disptach
  );

  return (
    <div className="main">
      <h1>Todo APP</h1>
      <div className="box">
        <AddTodo addTodo={actions.addTodo} />
        <TodoList
          editTodo={actions.editTodo}
          deleteTodo={actions.deleteTodo}
          finishTodo={actions.finishTodo}
        />
      </div>
    </div>
  );
}

export default App;
