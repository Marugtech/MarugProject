import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './pages/Nav';
import {BrowserRouter} from 'react-router-dom';
import Carousel from './pages/Carousel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav /> 
      <Carousel/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
