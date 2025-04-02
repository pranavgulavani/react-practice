import { useCallback, useEffect, useState } from "react";
import Button from "./components/button/Button";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";

// const initialTodos = [
//   { id: 1, title: "Buy groceries", completed: false },
//   { id: 2, title: "Finish project report", completed: true },
//   { id: 3, title: "Call emma", completed: false },
//   { id: 4, title: "Schedule dentist appointment", completed: false },
//   { id: 5, title: "Workout for 30 minutes", completed: true },
// ];

function App() {
  console.count("App component");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  //console.log("todo state",todo)
  // useEffect(() => {
  //   console.count("Use effect with list initialization");
  //   //setTodos(initialTodos);
  // }, []);

  function handleSubmit(e, todo) {
    if (!todo.title.trim()) return;
    if (editMode) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === currentTodo.id ? { ...item, title: todo.title } : item
        )
      );
      setEditMode(false);
      setCurrentTodo(null);
      return;
    }
    const newTodo = { ...todo, id: crypto.randomUUID() };
    setTodos((prev) => [...prev, newTodo]);
  }

  // function handleDelete(id) {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // }

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  // function handleEdit(todo) {
  //   setEditMode(true);
  //   setCurrentTodo(todo);
  // }

  const handleEdit = useCallback((todo) => {
    setEditMode(true);
    setCurrentTodo(todo);
  }, []);

  // function handleToggleComplete(id){
  //   setTodos((prev) =>
  //   prev.map((todo) =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   )
  // );
  // }

  const handleToggleComplete = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);
  return (
    <>
      <h3>TODOs</h3>
      <TodoForm
        editMode={editMode}
        handleSubmit={handleSubmit}
        currentTodo={currentTodo}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggleComplete={handleToggleComplete}
      />
      {todos.length !== 0 && (
        <Button
          aria-label="clear-all"
          onClick={() => setTodos([])}
        >
          Clear All
        </Button>
      )}
    </>
  );
}

export default App;
