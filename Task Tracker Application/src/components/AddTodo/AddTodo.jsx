import { useState } from "react";

import "./AddTodo.css";

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Click to add new task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo({ todoText: inputText });
          setInputText("");
        }}
      >
        Create Todo
      </button>
    </div>
  );
}

export default AddTodo;
