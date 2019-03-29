import { useState, useEffect } from "react";

function useTodos(initial) {
  const [todos, setTodos] = useState(initial);

  useEffect(() => {
    setTodos([...todos.map(item => (item === "gabut" ? "ga gabut" : item))]);

    return () => {
      console.log("Selamat tinggal");
    };
  });

  return [todos, setTodos];
}

export default useTodos;
