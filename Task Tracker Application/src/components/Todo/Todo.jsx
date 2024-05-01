import { useState } from "react";

import "./Todo.css";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finised, setFinished] = useState(isFinished);
  const [isEditting, setIsEditting] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div className="todo">
      <input
        className="checkbox"
        type="checkbox"
        checked={finised}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {isEditting ? (
        <input
          className="text"
          type="text"
          onChange={(e) => setEditText(e.target.value)}
          value={editText}
        />
      ) : (
        <span className="text">
          {todoData}
        </span>
      )}
      <button
        className="update"
        onClick={() => {
          setIsEditting(!isEditting);
          onEdit(editText);
        }}
      >
        {!isEditting ? "Update" : "Save"}
      </button>
      <button 
        className="delete"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
