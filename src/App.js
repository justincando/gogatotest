import './css/fonts.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
     <Navbar/> 
    <Routes>
    
    <Route  path="/registration" element ={< Registration/>} /> 
    <Route  path="/login" element ={< Login/>} /> 

    </Routes>
    </BrowserRouter>



  );
}

export default App;
