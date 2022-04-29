import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PContainer from "./components/PContainer";
import { useState } from "react";
import Profile from './components/Profile';
import Post from './components/Post'
import './css/navi.css';


function App() {
  const [currentUserId, setCurrentUserId] = useState(0); // Tracks current user Id, along with localstorage in login/registration components
  const [user, setUser] = useState(0);

  return (
    <BrowserRouter>

      <Navbar
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
        setUser={setUser}
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
              setUser={setUser}
            />
          }
        />

        <Route exact path="/profile/:id" element={<Profile currentUser={currentUserId} />} />
        <Route path="/myposts" element={<PContainer currentUserId={currentUserId} user={user} />}/>
        <Route path="/timeline" element={<Post currentUserId={currentUserId}/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;