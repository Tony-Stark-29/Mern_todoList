import React, { useEffect, useState } from "react";
import { useAuthenticationContext } from "../hooks/useAuthenticationContex";
import { useLogout } from "../hooks/useLogOut";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { user } = useAuthenticationContext();
  const { logout } = useLogout();
  const navigate = useNavigate();
  const location = useLocation();
  const [btnAction, setBtnAction] = useState({});

  useEffect(() => {
    switch (location.pathname) {
      case "/signup":
        setBtnAction({ path: "/login", action: "Login" });
        break;
      case "/login":
       setBtnAction({ path: "/signup", action: "signup" });
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <header className="container-fluid bg-dark text-light py-2 px-4">
      <div className="d-flex justify-content-between">
        <h3>TODO..</h3>
        {user && (
          <div className="d-flex align-items-center">
            <div className="p-2">{user.email.split("@")[0]}</div>
            <button className="btn btn-outline-danger" onClick={logout}>
              Logout
            </button>
          </div>
        )}
        { !user && (
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              navigate(btnAction.path);
            }}
          >
            {btnAction.action}
          </button>
        )}
        
      </div>
    </header>
  );
};
