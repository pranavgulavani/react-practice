import { useEffect, useState } from "react";
import { Edit2, Trash2 } from "react-feather";

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
  const [todo,setTodo] = useState({id:"",title:"",completed:false})
  const [editMode,setEditMode] = useState(false)

  //console.log("todo state",todo)
  useEffect(() => {
    console.count("Use effect with list initialization");
    //setTodos(initialTodos);
  }, []);

  function handleSubmit(e,todo){
      e.preventDefault();
      if(!todo.title.trim()) return
      if(editMode){
        setTodos(prev => prev.map(item => item.id === todo.id ? {...item,title:todo.title}:item))
        setEditMode(false)
        return
      }
      const newTodo = {...todo,id:crypto.randomUUID()}
      setTodos(prev => ([...prev,newTodo]))
      setTodo({id:"",title:"",completed:false})
      console.log("clicked add todo",todo)
  }

  function handleTodoInput(e){
      //console.log(e.target.value)
      setTodo(prev => {
        return {
          ...prev,
          title:e.target.value
        }
      })

  }

  function handleDelete(id){
      setTodos(prev => prev.filter(todo=> todo.id !== id))
  }

  function handleEdit(todo){
    setEditMode(true)
    setTodo(todo)
  }
  return (
    <>
      <h3>TODOs</h3>
      <form onSubmit={(e) => handleSubmit(e,todo)}>
      <input type="text" value={todo.title} placeholder="What do you need to add" onChange={handleTodoInput} />
      <button type="submit">{editMode ? "Update" : "Add"}</button>
      </form>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <section key={todo.id}>
              <input type="checkbox" />
              <span>{todo.title}</span>
              <button aria-label="edit-todo" onClick={() => handleEdit(todo)}><Edit2/></button>
              <button aria-label="delete-todo" onClick={() => handleDelete(todo.id)}><Trash2/></button>
            </section>
          );
        })
      ) : (
        <p>No pending todo</p>
      )}
      <button onClick={() => setTodos([])} disabled={todos.length==0}>Clear All</button>
    </>
  );
}

export default App;
