import Todo from "../todo/Todo";
import React from "react";

const MemoisedTodo = React.memo(Todo);
export default function TodoList({
  todos,
  handleDelete,
  handleEdit,
  handleToggleComplete,
}) {
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <section key={todo.id}>
              <MemoisedTodo
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleToggleComplete={handleToggleComplete}
              />
            </section>
          );
        })
      ) : (
        <p>No pending todo</p>
      )}
    </>
  );
}
