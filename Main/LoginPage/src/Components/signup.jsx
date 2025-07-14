import React from "react";
import Input from "./input";

function Signup() {
  return (
    <>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
