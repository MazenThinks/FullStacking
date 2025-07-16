import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleChangeFname(event) {
    setFname(event.target.value);
  }

  function handleChangeLname(event) {
    setLname(event.target.value);
  }

  function handleClick(event) {
    setName(fname + " " + lname);
    event.preventDefault();
    console.log(fname + " " + lname);
  }

  /* ****************************************************************** */

  const [fname2, setFname2] = useState("");
  const [lname2, setLname2] = useState("");
  const [email, setEmail] = useState("");

  function handleChangeF(event) {
    setFname2(event.target.value);
    event.preventDefault();
  }

  function handleChangeL(event) {
    setLname2(event.target.value);
    event.preventDefault();
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
    event.preventDefault();
  }

  return (
    <>
      <div className="Container">
        <h1 className="title">Hello {name}</h1>
        <form className="form">
          <input
            type="text"
            placeholder="FirstName"
            className="input"
            value={fname}
            onChange={handleChangeFname}
          />
          <input
            type="text"
            placeholder="LastName"
            className="input"
            value={lname}
            onChange={handleChangeLname}
          />
          <button type="submit" className="submit-button" onClick={handleClick}>
            Submit
          </button>
        </form>
        <hr />
        {/*************************************************************************************/}
        <hr />
        <h1 className="title">
          Hello {fname2} {lname2}
        </h1>
        <p className="ep">{email}</p>
        <form className="form">
          <input
            type="text"
            placeholder="FirstName"
            className="input"
            value={fname2}
            onChange={handleChangeF}
          />
          <input
            type="text"
            placeholder="LastName"
            className="input"
            value={lname2}
            onChange={handleChangeL}
          />
          <input
            type="text"
            placeholder="LastName"
            className="input"
            value={email}
            onChange={handleChangeEmail}
          />
        </form>
      </div>
    </>
  );
}

export default App;
