import React from "react";

function Note(props) {
  return (
    <>
      <div className="note">
        <h1 className="notext notexth1">{props.title}</h1>
        <p className="notext notextp">{props.content}</p>
      </div>
    </>
  );
}

export default Note;
