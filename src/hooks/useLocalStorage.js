import { useEffect, useState } from "react";

function useLocalStorage() {
   const [todos ,setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return [todos,setTodos]
}
export default useLocalStorage;
