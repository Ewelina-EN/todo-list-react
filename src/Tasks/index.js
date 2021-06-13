import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <li key={task.id}
        className={`list__item ${task.done & hideDone
          ? " hide "
          : ""}`
        }>
        <button
          className="list__button list__button--done "
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}</button>
        <span className={`list__task${task.done
          ? " list__task--done"
          : ""}`}>
          {task.content} </span>
        <button
          className="list__button list__button--remove "
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;