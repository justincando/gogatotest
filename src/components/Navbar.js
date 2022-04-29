// Author: Tyler, Jason, Boualem, Marcus

import { Link, Navigate } from "react-router-dom";
export default function Navbar({ currentUserId, setCurrentUserId, setUser }) {

      checkUser();

      function checkUser(){
            if (window.localStorage.getItem("userId") >= 0){

              setCurrentUserId(window.localStorage.getItem("userId"));
              setUser(window.localStorage.getItem("username"));
            }
            else {
              setCurrentUserId(0);
              setUser(0);
            }
      }

      // Handles event when logout button is pressed
    function logout() {
    window.localStorage.clear();          // Clear storage
    setCurrentUserId(0);  // Update state for re-rendering
    setUser(0);           // Update state for re-rendering
  
    return <Navigate to="/login" />;      // Go back to login component
  }

  // If someone is logged in, link to relevant components. Otherwise, link to login and registration
  return currentUserId > 0 ? (
    <>

        <div class="nav-flex-container">
          <div class="left"><img alt="GG Logo" src='https://raw.githubusercontent.com/Revature-GoGato/GoGatoFrontEnd/development/public/logo/ggs.png'></img></div>

        <div class="right">
          <div class="flex-item"><Link to={"/profile/"+ currentUserId}>Settings</Link></div>
          <div class="flex-item"><Link to="/myposts">Posts</Link></div>
          <div class="flex-item"><Link to="/timeline">Timeline</Link></div>
          <div class="flex-item"><button className='logout'  onClick={logout}>Log Out</button></div>
        </div>
        </div>
    </>
  ) : (
    <>
      <div>
        <Link to="/login"> Login</Link>
        <Link to="/registration"> Register</Link>
        <button onClick={logout}> Log out </button>
      </div>
    </>
  );
}
