// Author: Tyler, Jason, Boualem, Marcus
import { useState, useEffect } from "react";

// Functional component for User Registration
function Registration() {
  //const [userToRegister, setUserToRegister] = useState(null);

  // Contains fields for User input
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    aboutMe: "",
  });

  //useEffect(() => console.log(userToRegister), [userToRegister]);
  useEffect(() => console.log(inputFields), [inputFields]);

  // Handles input event for User fields/registration
  function getInput(event) {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value,
    });
  }


  //insert fetch call
  function submitNewUser() {}

  return (
    <>
      <h1>Registration</h1>

      <form>
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
        {/* First Name Field */}
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={inputFields.firstName}
          onChange={getInput}
          required
        />
        <br />
        {/* Last Name Field */}
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={inputFields.lastName}
          onChange={getInput}
          required
        />
        <br />
        {/* Email Field */}
        Email:{" "}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputFields.email}
          onChange={getInput}
          required
        />
        <br />
        {/* About Me Field */}
        <textarea
          name="aboutMe"
          placeholder="About Me"
          maxLength="250"
          value={inputFields.aboutMe}
          onChange={getInput}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Registration;
