import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

import { Home } from "./components/Home";
import { useAuthenticationContext } from "./hooks/useAuthenticationContex";
import { useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AllActivity } from "./components/AllActivity";
import { Header } from "./components/Header";
import { Today } from "./components/Today";

function App() {
  const location = useLocation();
  const { user } = useAuthenticationContext();

  const style =
    location.pathname === "/login" || location.pathname === "/signup"
      ? "App d-flex flex-column gap-2 "
      : "App d-flex flex-column flex-lg-row gap-1";
  return (
    <div className={style}>
      {user && <NavBar />}
      {!user && <Header/>}

      <section className="container">
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login"></Navigate>}
          ></Route>


          <Route
            path="/allactivity"
            element={user ? <AllActivity /> : <Navigate to="/login"></Navigate>}
          ></Route>

          <Route
            path="/today"
            element={user ? <Today /> : <Navigate to="/login"></Navigate>}
          ></Route>

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/"></Navigate>}
          ></Route>
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/login"></Navigate>}
          ></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
