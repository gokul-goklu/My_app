import React, { useState } from "react";

export const Todo_Form = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };
  return (
    <form className="TodoForm" onSubmit={HandleSubmit}>
      <input
        type="text"
        placeholder="WHat's it today"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        className="Todo_input"
      />
      <button type="submit" className="Todo_add">
        Add Me
      </button>
    </form>
  );
};
