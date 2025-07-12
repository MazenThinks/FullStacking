import React from "react";
import ReactDOM from "react-dom/client";

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <>
      <div className="footer">
        <h1 className="footertext">Copyright &copy; {year}</h1>
      </div>
    </>
  );
}

export default Footer;
