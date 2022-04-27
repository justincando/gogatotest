import './css/fonts.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element ={< Registration/>} /> 
    <Route  path="/login" element ={< Login/>} /> 



    </Routes>
    </BrowserRouter>



  );
}

export default App;
