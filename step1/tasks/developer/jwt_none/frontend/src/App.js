import './App.css';
import Routes1 from './components/Routes1';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
       
        <Routes1/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
