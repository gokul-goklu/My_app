import React, { useState } from "react";

export const Todo = () => {
  const [changeTodo, setchangeTodo] = useState([]);
  const [Submitchange, setSubmitchange] = useState("");

  const textToDo = (e) => {
    setSubmitchange(e.target.value);
  };

  const submitText = () => {
    setchangeTodo(...changeTodo, Submitchange);
    setSubmitchange("");
  };

  return (
    <div>
      <input type="text" onChange={textToDo} />
      <button onClick={submitText}> Submit</button>
      {changeTodo.map((changeTodos) => (
        <div>{changeTodos}</div>
      ))}
    </div>
  );
};
