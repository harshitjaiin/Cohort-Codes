import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"DSA",
    desc:"Placement"
  } ,{
    id:2,
    title:"Dev",
    desc:"intern"
  },
{
  id:3,
  title:"quant",
  desc:"MBA"
}]);

let id = 4;
  const [desc, setDesc] = useState("body Banao")
  function addTodo(){
    setTodos([...todos , {
      id:id++,
      title:Math.floor(1000*Math.random()),
      desc:Math.floor(1000*Math.random())
    }]);
  }
  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {
        todos.map(function(todo){

          //very important point!
          //agr key isme nhi daloge to console me error ayega
          //ki unique key nhi h sbki

          //Agr unique key hogi sbko to it gets easier for react to do re-render 
          //usko ye pata chal jata h kis part ko karna hai re-render kis part ko nhi!
          
          // return <Todo title={todo.title} desc={todo.desc}></Todo>

          return <Todo key={todo.id} title={todo.title} desc={todo.desc}></Todo>
        })
      }
    </>
  )
}

function Todo({title , desc}){
    return <div>
      <h1>{title}</h1>
      <h4>{desc}</h4>
    </div>
}

export default App
