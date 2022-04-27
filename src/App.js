import './css/fonts.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

    <Navbar />  {/* Navbar, shown at all times */}

    <Routes>

      {/* Route the different components here */}
      <Route path='/' element={/* Component to route to */ null} />

    </Routes>

    </BrowserRouter>
  );
}

export default App;
