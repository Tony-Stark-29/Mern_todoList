import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { useAuthenticationContext } from "./hooks/useAuthenticationContex";


function App() {
  const { user } = useAuthenticationContext();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
     
          <Route
            path="/home"
            //element={user ? <Home />  : <Navigate to="/login"></Navigate>}
            element={<Home/>}
          ></Route>
        

        <Route
          path="/login"
         // element={!user ? <Login /> : <Navigate to="/"></Navigate>}
         element={<Login/>}
        ></Route>
        <Route
          path="/signup"
          //element={!user ? <SignUp /> : <Navigate to="/login"></Navigate>}
          element={<SignUp/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
