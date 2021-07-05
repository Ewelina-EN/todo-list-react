import React, { useState } from "react";
import "./style.css";

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
      <form className="form" onSubmit={onFormSubmit}>
         <input
            className="form__newTask"
            placeholder="Co jest do zrobienia?"
            value={newTaskContent}
            autoFocus
            onChange={({ target }) => setNewTaskContent(target.value)}
         />
         <button className="form__taskButton">Dodaj zadanie</button>
      </form>
   );
};

export default Form;