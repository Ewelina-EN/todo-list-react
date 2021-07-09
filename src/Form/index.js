import React, { useState } from "react";
import { StyledForm, NewTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();

      if (newTaskContent.trim() === "") {
         return;
      };

      addNewTask(newTaskContent);
      setNewTaskContent("");
   };

   return (
      <StyledForm
         onSubmit={onFormSubmit}>
         <NewTask
            placeholder="Co jest do zrobienia?"
            value={newTaskContent}
            autoFocus
            onChange={({ target }) => setNewTaskContent(target.value)}
         />
         <Button>Dodaj zadanie</Button>
      </StyledForm>
   );
};

export default Form;