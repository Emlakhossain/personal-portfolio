import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
