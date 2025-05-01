import { Edit2, Trash2 } from "react-feather";
import Button from "../button/Button";
function Todo({ todo, handleDelete, handleEdit ,handleToggleComplete}) {
  console.count(`Todo rendered:${todo.title}`)
  return (
    <div>
        <label htmlFor="checkbox todo">
        <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo.id)}/>
        </label>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>{todo.title}</span>
      <Button aria-label="edit-todo" onClick={() => handleEdit(todo)}>
        <Edit2 />
      </Button>
      <Button aria-label="delete-todo" onClick={() => handleDelete(todo.id)}>
        <Trash2 />
      </Button>
    </div>
  );
}

export default Todo;
