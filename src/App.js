import './App.css';
import Mainframe from './components/Mainframe';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
document.body.style = 'background: rgb(220, 220, 220);';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
          <Routes>
            
            <Route exact path='/' element={<Mainframe/>}></Route> 

          </Routes>
    </Router>
    </>
    
  );
}

export default App;
