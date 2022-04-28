import {Link } from "react-router-dom";
export default function Navbar(){
 
    return window.localStorage.getItem("userId") >0 ? (console.log("Navbar after logging in ")): ( 
    <>
    <div>
             
          <Link to ="/login"> Login</Link>
          <Link to ="/registration"> Register</Link>
          <button onClick={ ()=> window.localStorage.clear()  }> Log out </button>
           
    </div> 
    </>
     );}



