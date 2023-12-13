import React from "react";
import {Link} from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
      <div className="login_form_container center_align flex_column">
        <form action="" className="login_form">
          <input type="email" placeholder="Email Id" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};
