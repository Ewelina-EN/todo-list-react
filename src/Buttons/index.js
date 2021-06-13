import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone}) => (

  <div className="subHeader">
    {tasks.length > 0 && (
      <>
        <button className="subHeader__button">
          {hideDone? "Pokaż" : "Ukryj"} ukończone
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