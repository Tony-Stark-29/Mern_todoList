import React from "react";
import { Link } from "react-router-dom";
import { UserBtn } from "./UserBtn";
import { useAuthenticationContext } from "../hooks/useAuthenticationContex";

export const NavBar = () => {

  const {user}=useAuthenticationContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-lg-2 ">
      <div className="container-fluid d-flex flex-row flex-lg-column align-center-start  ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand mb-lg-5" >
          ToDo..
        </h1>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column  ">
            <li className="nav-item mb-lg-5">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mb-lg-5">
              <Link className="nav-link " to="/allactivity">
                All Activity
              </Link>
            </li>
            <li className="nav-item mb-lg-5">
            <Link className="nav-link " to="/today">
                Today
              </Link>
            </li>
            <li className="nav-items mb-lg-5">
              <span className="text-light m-2">{user.email.split('@')[0]}</span>
              <UserBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
