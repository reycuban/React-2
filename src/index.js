import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heding" contentEditable="true" spellcheck="false">
      Reinier Blanco
    </h1>
    <ul>
      <li>Web developer</li>
      <li>Video Editor</li>
      <li>Gamer</li>
    </ul>
    <div>
      <img src={img} />
      <img
        className="boxingSport"
        src="https://images.unsplash.com/photo-1542459629-519887d476da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      />
    </div>
  </div>,
  document.getElementById("root")
);

//by using <img src={we can use what we want to be called} make sure to use closing tag
