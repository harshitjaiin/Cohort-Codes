import { useEffect, useState } from 'react'
function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
         const json = await res.json();
         setTodos(json.todos);
      })
    } , 10000)
  } , []);

  return (
    <div>
      {todos.map(function(todo){
        return <Todo>
          {todo.id}
          {todo.title}
          {todo.description}
        </Todo>
      })}
    </div>
  )
}

function Todo({children}){
  console.log(children);
  return (
    <div>
      <h1>{children[1]}</h1>
      <h3>{children[2]}</h3>
    </div>

  )
}

export default App
