import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// 1. Simple Straightforward Approach
// function App() {
//   const [title, setTitle] = useState("My name is Harshit")
//   //but as you update the title the whole div is re-rendered and you don't want that!!
//   function updateTitle(){
//     setTitle("My name is " + Math.random());
//   }
//   return (
//       <div>
//           <button onClick={updateTitle}>Click me to Change the title</button>
//           <Header title={title}></Header>
//           <Header title="Jain"></Header>
//           <Header title="Jain"></Header>
//           <Header title="Jain"></Header>
//       </div>
//     )
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }


// //2. Move the var and the set varibale to another function 
// // wo part hi bs re render hoga jiski val change horahi!
// function App() {
  
//   return (
//       <div>
//           <ButtonwithTitle/>
//           <Header title="Jain2"></Header>
//           <Header title="Jain1"></Header>
//           <Header title="Jain1"></Header>
//           <Header title="Jain1"></Header>
//       </div>
//     )
// }

// //is approach me apan ne re render wlae part ko alag bana dia
// //to sirf itna hi re-render hoga not poora!
// function ButtonwithTitle(){
//   const [title, setTitle] = useState("My name is Harshit")
//   //but as you update the title the whole div is re-rendered and you don't want that!!
//   function updateTitle(){
//     setTitle("My name is " + Math.random());
//   }

//   return <div>
//     {/*
//     ye neeche wale change ni hore but ye bhi re render honge!
//     */}
//     <button onClick={updateTitle}>Click me to Change the title</button>
//     <Header title={title}></Header>
//     <Header title="Jainxx"></Header>
//     <Header title="Jainxxx"></Header>
//   </div>
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// // 3. And the best approach is to use React Memo (Memoization!)
function App() {
  const [title, setTitle] = useState("My name is Harshit")
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return (
      <div>
          {/* //parent div hoga rerender */}
          <button onClick={updateTitle}>Click me to Change the title</button>
          {/* ye button bhi hoga
          baki neeche wale bhi honge
          but as a whole 1st wale me individually sb rerender hore the!! */}
          <Header title={title}></Header>
          <Header title="Jain"></Header>
          <Header title="Jain"></Header>
          <Header title="Jain"></Header>
          <Header title="Jain"></Header>
          <Header title={title}></Header>
          <Header title="Jain"></Header>
          <Header title="Jain"></Header>
          <Header title="Jain"></Header>
          <Header title="Jain"></Header>
      </div>
    )
}

const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
