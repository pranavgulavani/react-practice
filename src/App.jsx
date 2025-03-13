import { Fragment, useEffect, useState } from "react";

const initialTodos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Finish project report", completed: true },
  { id: 3, title: "Call emma", completed: false },
  { id: 4, title: "Schedule dentist appointment", completed: false },
  { id: 5, title: "Workout for 30 minutes", completed: true },
];

function App() {
  console.count("App component");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.count("Use effect with list initialization");
    setTodos(initialTodos);
  }, []);

  return (
    <>
      <h3>TODOs</h3>
      <input type="text" placeholder="What do you need to add" />
      <button>Add</button>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <section key={todo.id}>
              <input type="checkbox" />
              <span>{todo.title}</span>
            </section>
          );
        })
      ) : (
        <p>No pending todo</p>
      )}
      <button onClick={() => setTodos([])}>Clear All</button>
    </>
  );
}

export default App;
