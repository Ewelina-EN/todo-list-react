import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone}) => (
  <ul className="list">
    {tasks.map(task => (
      <li key={task.id}
        className={`list__item ${task.done & hideDone
          ? " hide "
          : ""}`
        }>
        <button className="list__button list__button--done ">
          {task.done ? "✔" : ""}</button>
        <span className={`list__task${task.done
          ? " list__task--done"
          : ""}`}>
          {task.content} </span>
        <button className="list__button list__button--remove ">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;