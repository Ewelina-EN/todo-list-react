import React from "react";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <StyledButtons>
    {tasks.length > 0 && (
      <>
        <Button
          onClick={toggleHideDone}
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={setAllDone}
          disabled={tasks.every((task => task.done))}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </StyledButtons>
);


export default Buttons;