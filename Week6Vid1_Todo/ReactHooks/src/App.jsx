


/*

React Hooks are a feature introduced in React version 16.8 that allow you to use state and other React features without writing a class component1234. They are functions that “hook into” React’s state and lifecycle features from function components


In the context of React.js, side effects refer to any operations that interact with the outside world from within a React component. These interactions can include a variety of actions such as:

1.Making HTTP requests to external APIs
2.Manipulating the DOM
3.Setting or getting values in local storage4
4.Logging messages to the console or other service4
5.Working with timers like setInterval or setTimeout4
6.Setting the page title

These side effects are not part of the React framework itself, but they often need to be used within a React component.

For example, you might need to fetch data from an API when a component mounts, or you might need to set a value in local storage when a certain state changes.


Types of Hooks:
1. UseState : This hook lets you describe the state of your app 
  and whenever the state updates , it triggers a re-render which finally results in new state ( DOM update).

  Ex " const[count , setCount] = useState(0)"
  //count ki start value 0 hai and aage jaisi count change hoga
  //re render kr dega
  
//<------------------------------------------------------------------------------------->


2. UseEffect : This hook lets you to prform side effects in function components. Like hitting the backend , fetching from an api etc

Ex : F1 Cars don't stop at every lap to get tyres change but they do so when certain conditions are met . 
Stopping for service is "side effect" and useEffect lets you do it when some conditions are met

it takes 2 things
1st is the fn which should run when conditions are met ( the fisrst fn cannot be an async fn , it should use .then syntax )
2nd is the state variables which when change the useEffect's fn should be called

*/


// // This is how We can use UseEffect to do backend call once and render it!
// import { useEffect, useState } from 'react'
// import axios from "axios";

// function App() {
//   const [todos, setTodos] = useState([]);

//   //main kaam useEffect ka here is to make sure backend ek hi bar call ho raha hai!
//   useEffect(() => {
//     console.log("Im inside useEffect");
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function(value){
//       setTodos(value.data.todos);
//     })
//   } ,[]);

//   return (
//       <>
//         <h1>HI</h1>
//         {todos.map( todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//       </>
//   )
// }

// function Todo({id , title , description}){
//   return (
//   <div>
//     <h5>{id}</h5>
//     <h1>{title}</h1>
//     <h4>{description}</h4>
//   </div>
//   )
// }

// export default App

//<------------------------------------------------------------------------------------->

// /*
// Exercise 2 : Write a component which takes a todo Id
// as input and fetches the data for that todo from the server
// and then renders it

// //Notice the change in dependency array!

// */


// import { useEffect, useState } from 'react'
// import axios from "axios";

// function App() {

//   return (
//       <div>
//         <Todo id ={4}/>
//       </div>
//   )
// }

// function Todo({id}){
//   const[todo , setTodo] = useState({});

//   useEffect(()=>{
//     console.log("Im inside useEffect");
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id)
//     .then(function(res) {
//       setTodo(res.data.todo)
//     })
//   } , [])

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   )
// }

// export default App



// /*
//<------------------------------------------------------------------------------------->
// // Exercise 3 : Write a react app with 4 buttons : 1 ,2 , 3 and 4
// and when the button is clicked fetch adn display that todo number 

// //

// // */


// import { useEffect, useState } from 'react'
// import axios from "axios";

// function App() {
//   const[id , setId] = useState(1);
//   return (
//       <div>
//         <button onClick={()=>setId(1)}>1</button>
//         <button onClick={()=>setId(2)}>2</button>
//         <button onClick={()=>setId(3)}>3</button>
//         <button onClick={()=>setId(4)}>4</button>

//         <Todo id={id}/>
//       </div>
//   )
// }

// function Todo({id}){
//   const [todo , setTodo] = useState({});
//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id)
//     .then(function(res) {
//         setTodo(res.data.todo);
//     })
//     //agr ye id ni dalunga to sirf ek bar call hoga then no call!
//     //bcz there is no dependancy!
//   } , [id])
  
//   return <div>
//     <h5>{todo.id}</h5>
//     <h1>{todo.title}</h1>
//     <h3>{todo.description}</h3>
//   </div>
// }

// export default App

/*
<------------------------------------------------------------------------------------->
3.UseMemo Hook: Just remember prev result and don't rerender if no change
Exercise 1 : Create a button which inrements the counter and also shows the sum of 1->n
*/

import { useEffect, useMemo, useState } from 'react'

function App(){
    const [count , setCount] = useState(0);
    const[input , setInput] = useState(0);
    
    /*
    The problem with this logic is whenever we do increment opperation
    the sum part is also calulated again!!
    This is highly inefficient!
    
       And for this only UseMemo Comes in the picture
    */
    // let sum = 0;
    // for(let i = 0 ; i<=input ; i++) {
    //   if(i==0) console.log("hey sum was calculated again!"); 
    //   sum+=i;
    // }


    // this can be replaced with!
    //Very similar to useffect!!
    let sum = useMemo(()=>{
      console.log("hey sum was calculated!");
      let newsum = 0;
      for(let i= 0 ; i<=input ; i++) newsum+=i;
      return newsum;
    } ,[input]);

    return(
      <div>
        <>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>{count}</p>
        </>
        <>
        <input placeholder='Enter the value' onChange={function(e){
          setInput(Number(e.target.value));
          }}></input>
        <p>The sum is : {sum}</p>
        </>
      </div>
    )
  }
  export default App
  
  
  
  // <------------------------------------------------------------------------------------->