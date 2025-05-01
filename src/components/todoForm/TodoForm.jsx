import { useEffect, useRef, useState } from "react";
import Button from "../button/Button";

function TodoForm({ editMode, handleSubmit, currentTodo }) {
  console.count("Todo form");

  const [todo, setTodo] = useState({ id: "", title: "", completed: false });
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (editMode) {
      setTodo(currentTodo); // Populate with existing data
      inputRef.current?.focus();
    }
  }, [editMode, currentTodo]);

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(e, todo);
    setTodo({ id: "", title: "", completed: false });
    inputRef.current?.focus();
  }

  function handleTodoInput(e) {
    //console.log(e.target.value)
    setTodo((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  }
  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e, todo)}>
        <input
          type="text"
          value={todo.title}
          placeholder="What do you need to add"
          onChange={handleTodoInput}
          ref={inputRef}
        />
        <Button type="submit">{editMode ? "Update" : "Add"}</Button>
      </form>
    </div>
  );
}

export default TodoForm;
