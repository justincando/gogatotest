// Author: Tyler, Jason, Boualem, Marcus
import '../css/navi.css';
import { useState, useEffect } from "react";
import {Navigate} from "react-router-dom";

// Functional component for User Login
function Login({ currentUserId, setCurrentUserId, setUser }) {

  // Contains fields for User input
  const [inputFields, setInputFields] = useState({
    username: "",
    password: ""
  });

  // Handles input event for User fields/registration
  function getInput(event) {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  }

  //insert fetch call
  async function loginUser(event) {
    // Stop default form submission event
    event.preventDefault();

    // Register user
    let userInfo = {
      username: inputFields.username,
      password: inputFields.password
    };

    // Submit info to server
   let data= await fetch("http://localhost:8000/login", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.text());  

    // Decide on redirection here  and user storage =====
    if (data!=0){
      window.localStorage.setItem( "userId", data);
      setCurrentUserId(data);
      window.localStorage.setItem( "username", userInfo.username);
      console.log(userInfo.username);
      setUser(userInfo.username);
      
    }
  }

  return currentUserId > 0 ? (<Navigate to ={"/profile/"+ currentUserId }/>) :  (
    <>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        {/* Username Field */}
        Username:{" "}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputFields.username}
          onChange={getInput}
          required
        />
        <br />
        {/* Password Field */}
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputFields.password}
          onChange={getInput}
          required
        />
        <br />
        
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
