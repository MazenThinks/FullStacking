import { useState } from "react";
import Login from "./Components/login";
import Signup from "./Components/signup";
import LoggedIn from "./Components/loggedIn";

const isLoggedIn = true;
const isRegistered = true;

function Rendering() {
  return isLoggedIn && isRegistered ? (
    <LoggedIn />
  ) : !isLoggedIn && isRegistered ? (
    <Login />
  ) : !isLoggedIn && !isRegistered ? (
    <Signup />
  ) : null;
}

function App() {
  return <>{Rendering()}</>;
}

export default App;
