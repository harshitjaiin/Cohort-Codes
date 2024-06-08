// import { Dashboard } from "./components/dashboard"
// import { Landing } from "./components/landing"
import {BrowserRouter , Routes , Route , useNavigate} from 'react-router-dom'
import React, { Suspense } from 'react'
const Dashboard = React.lazy(()=> import("./components/dashboard"));
const Landing = React.lazy(()=> import("./components/landing"));
function App() {
 /*
  This window.location wala method is not good as it does a hard refresh of 
  the page and sb kch wapas se backend se hi arha
  to koi fayda hi nhi hua apne client side routing ka toh!

  So this approach should not be used!

  We can use something known as the useNavigate Hook to smoothly
  navigate from one page to other without actually getting data
  again n again from the backend

  but to use the useNavigate hook we need to place it inside the browser Router 
  in order for it to work properly! bcz usko parent url pata rhega tb

  But isme ek flaw hai chota sa manlo tumhare pass 10routes hai
  1st time jb re jaygei sb ajayega
  but socho banda bs 1st page se wapas chale jaye
  to ye fir inefficient hojaega na!!

  To to optimise that we can use somthing known as LAZY Loading
  usme apan agr page 1st time araa to leke ayenge uske bad nahi!

  iske lie ek chiz hai ki jo tum component la rahe usko default export krna pdega
  mtlb ki {component} nahi component hi chaie
  uske lie apan ko us file me jake export default krna pdega!
  (ek file me ek hi export default ho sakta hai!!)
  ek aur chiz isme suspense API use krna pdta haii!
  BCZ isme fetch hota hai backend se data to usko rukwana pdta hai!
 */
  return (
    <>
      {/*
      This is not the right way to do it!
       <div>
        <button onClick={()=>{
          window.location.href = "/";
        }}>Landing Page</button>
        <button onClick={()=>{
          window.location.href = "/dashboard"
        }}>Dashboard</button>
      </div> */}

      <BrowserRouter>
        <TopBar></TopBar>

        <Routes>
          <Route path="/dashboard" element = {<Suspense fallback="loading..."><Dashboard /></Suspense>}/>;
          <Route path="/" element = {<Suspense fallback="loading..."><Landing /></Suspense>}/>;
        </Routes>
      </BrowserRouter>
    </>
  )
}

function TopBar(){
  //ye yehi ana chaie!
  const navigate = useNavigate();
  return  <div>
    <div>
      <button onClick={()=>{
        navigate("/");
      }}>Landing Page</button>
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button>
    </div>
  </div>
}

export default App
