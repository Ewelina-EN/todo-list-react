import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

  <div>
    {tasks.length > 0 && (
      <>
        <button className="subHeader__button">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
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