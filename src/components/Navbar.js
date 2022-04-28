// Author: Tyler, Jason, Boualem, Marcus

import { Link, Navigate } from "react-router-dom";
export default function Navbar({ currentUserId, setCurrentUserId }) {

      // checkUser();

      // function checkUser()
      // {
      //       if (window.localStorage.getItem("userId") >= 0)
      //       {
      //       setCurrentUserId(window.localStorage.getItem("userId"));
      //       }
      //       else setCurrentUserId(0);
      // }

      // Handles event when logout button is pressed
  function logout() {
    window.localStorage.clear();          // Clear storage
    setCurrentUserId(0);                  // Update state for re-rendering
    return <Navigate to="/login" />;      // Go back to login component
  }

  // If someone is logged in, link to relevant components. Otherwise, link to login and registration
  return currentUserId > 0 ? (
    <>
      <div>
        <h3>Profile Link</h3>
        <h3>Post Link</h3>
        <button onClick={logout}> Log out </button>
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
