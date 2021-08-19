import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./styled";

const Form = () => {
   const [newTaskContent, setNewTaskContent] = useState("");
   const inputRef = useRef(null);

   const dispatch = useDispatch();

   const onFormSubmit = (event) => {
      event.preventDefault();

      if (newTaskContent.trim() === "") {
         return;
      };
      const task = {
         content: newTaskContent,
         done: false,
         id: nanoid(),
      };
      dispatch(addTask(task));

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