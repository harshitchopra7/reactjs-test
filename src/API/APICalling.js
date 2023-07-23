import React, { useState, useEffect } from "react";

function APICalling() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setTodo(data))
      .catch((err) => console.log(err));
  }, []);

  // {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   }

  return (
    <div>
      <p>userId - {todo.userId}</p>
      <p>id - {todo.id}</p>
      <p>title - {todo.title}</p>
      <p>completed - {todo.completed}</p>
    </div>
  );
}

export default APICalling;
