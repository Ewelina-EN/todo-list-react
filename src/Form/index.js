import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <div className="toDoList__form">
            <input className="toDoList__form--newTask" requires placeholder="Co jest do zrobienia?"
                autoFocus />
            <button className="toDoList__form--taskButton">Dodaj zadanie</button>
        </div>
    </form>
);

export default Form;