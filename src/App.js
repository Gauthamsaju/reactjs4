import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import View from './components/View';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path={'/'} element={<View/>}></Route>
        <Route path={'/add'} element={<Add/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
