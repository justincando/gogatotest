import "./css/fonts.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Profile from './components/Profile';

function App() {
  const [currentUserId, setCurrentUserId] = useState(0); // Tracks current user Id, along with localstorage in login/registration components

  return (
    <BrowserRouter>

      <Navbar
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      <Routes>
        <Route
          path="/registration"
          element={<Registration currentUserId={currentUserId} />}
        />
        <Route
          path="/login"
          element={
            <Login
              currentUserId={currentUserId}
              setCurrentUserId={setCurrentUserId}
            />
          }
        />

        <Route exact path="/profile/:id" element={<Profile currentUser={currentUserId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
