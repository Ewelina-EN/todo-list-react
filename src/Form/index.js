import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();
      addNewTask(newTaskContent);
      setNewTaskContent("");
   };

   return (
      <form className="form__toDoList" onSubmit={onFormSubmit}>
         <input
            className="form__toDoList--newTask"
            placeholder="Co jest do zrobienia?"
            value={newTaskContent}
            autoFocus
            onChange={({target}) => setNewTaskContent(target.value)}
         />
         <button className="form__toDoList--taskButton">Dodaj zadanie</button>
      </form>
   );
};

export default Form;