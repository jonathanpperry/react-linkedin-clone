import React from "react";
import "./Login.css";
function Login() {
  const loginToApp = () => {};

  const register = () => {};

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt=""
      />

      <form>
        <input placeholder="Full name (Required)" type="text" />

        <input placeholder="Profile pic URL (optional)" type="text" />

        <input placeholder="Email" type="text" />

        <input placeholder="Password" type="password" />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
