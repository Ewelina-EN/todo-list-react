import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <div className="form__toDoList">
            <input className="form__toDoList--newTask" requires placeholder="Co jest do zrobienia?"
                autoFocus />
            <button className="form__toDoList--taskButton">Dodaj zadanie</button>
        </div>
    </form>
);

export default Form;