import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <CardWrapper>
        <RedBorder>No way</RedBorder>
       </CardWrapper>
       <CardWrapper>Hey There</CardWrapper>
    </div>
  )
}

function CardWrapper({children}){
  console.log(children);
  return (<div style={{border:"2px solid black" , padding:"10px" , margin:"10px"}}>
    {children}
  </div>)
}

function RedBorder({children}){
  return(
    <div style={{border:"10px solid green" , padding:"10px" ,margin:"10px"}}>
      {children}
    </div>
  )
}

export default App
