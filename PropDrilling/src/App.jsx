import { Dashboard } from "./components/dashboard"
import { Landing } from "./components/landing"
import {BrowserRouter , Routes , Route , useNavigate} from 'react-router-dom'

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
        {/* <TopBar></TopBar> */}
        {/* Both are the same */}
        <TopBar/>
        
        <Routes>
          <Route path="/dashboard" element = {<Dashboard />}/>;
          <Route path="/" element = {<Landing />}/>;
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
