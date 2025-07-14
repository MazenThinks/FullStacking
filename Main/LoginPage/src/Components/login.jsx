import React from "react";
import Input from "./input";

function Login() {
  return (
    <>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
