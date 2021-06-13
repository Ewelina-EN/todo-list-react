import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (

  <div className="subHeader">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="subHeader__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
        <button
          className="subHeader__button"
          disabled={tasks.every((task => task.done))}
        >
          Ukończ wszystkie
      </button>
      </>
    )}
  </div>
);


export default Buttons;