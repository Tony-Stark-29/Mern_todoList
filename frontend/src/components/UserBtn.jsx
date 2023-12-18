import React, { useEffect, useState } from "react";
import { useAuthenticationContext } from "../hooks/useAuthenticationContex";
import { useLogout } from "../hooks/useLogOut";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const UserBtn = () => {
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
  const style =
    btnAction.path === "/login" || btnAction.path === "/signup"
      ? "d-flex flex-row text-light align-items-between py-2 px-4"
      : " col-lg-2 col-sm-12 d-flex flex-row justify-content-sm-between text-light py-2 px-4";

  return (
    <>
      {user && (
         
          <button
            className="btn btn-outline-danger "
            onClick={logout}
          >
            Logout
          </button>
        
      )}
      {!user && (
        <button
          className="btn btn-outline-primary  "
          onClick={() => {
            navigate(btnAction.path);
          }}
        >
          {btnAction.action}
        </button>
      )}
    </>
  );
};
