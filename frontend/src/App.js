 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import {SignUp} from "./pages/SignUp";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">

    <Header></Header>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
