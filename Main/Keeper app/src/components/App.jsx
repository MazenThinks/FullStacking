import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./heading.jsx";
import Note from "./note.jsx";
import Footer from "./footer.jsx";
import notes from "./notes.jsx";

const noteData = notes.map((note) => {
  return <Note key={note.key} title={note.title} content={note.content} />;
});

function App() {
  return (
    <>
      <Heading />
      <div className="row">
        {notes.map((note) => {
          return (
            <Note key={note.key} title={note.title} content={note.content} />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
