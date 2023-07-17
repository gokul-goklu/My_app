import React, { useState } from "react";
import { Todo_Form } from "./Todo_Form";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const Todo_Wrapper = () => {
  const [Todos, setTodos] = useState([]);
  const addTodo = (Todo) => {
    setTodos([
      ...Todos,
      { id: uuidv4(), task: Todo, Completed: false, isEditing: false },
    ]);
    // console.log(Todos);
  };
  return (
    <div>
      <ul>
        {Todos.map((e) => (
          <li>{e.task}</li>
        ))}
      </ul>
      <Todo_Form addTodo={addTodo} />
    </div>
  );
};
