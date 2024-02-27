
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
