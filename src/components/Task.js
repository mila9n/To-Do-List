import React from "react";
import { TaskStyle } from "./styles/task.styled";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Task = (props) => {
  const { mode } = useContext(ThemeContext);

  return (
    <TaskStyle>
      <div id={mode}>
        <span
          onClick={props.handleComplete}
          className={props.completed ? "completed" : null}
        >
          {props.completed && <img src="./images/icon-check.svg" />}
        </span>
        <p className={props.completed ? "completed-task" : null}>
          {props.task}
        </p>
        <img src="./images/icon-cross.svg" onClick={props.handleDelete} />
      </div>
    </TaskStyle>
  );
};

export default Task;
