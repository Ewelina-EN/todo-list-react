import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const inputRef = useRef(null);

   const onFormSubmit = (event) => {
      event.preventDefault();

      if (newTaskContent.trim() === "") {
         return;
      };

      addNewTask(newTaskContent);
      setNewTaskContent("");
      inputRef.current.focus();
   };

   return (
      <StyledForm
         onSubmit={onFormSubmit}>
         <Input
            ref={inputRef}
            placeholder="Co jest do zrobienia?"
            value={newTaskContent}
            autoFocus
            onChange={({ target }) => setNewTaskContent(target.value)}
         />
         <Button >Dodaj zadanie</Button>
      </StyledForm>
   );
};

export default Form;