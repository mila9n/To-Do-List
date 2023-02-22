import React from "react";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../redux/features/ToDo-feature";
import { FiltersStyle } from "./styles/Filters.styled";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Filters = (props) => {
  const dispatch = useDispatch();

  const { mode } = useContext(ThemeContext);

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <FiltersStyle className="hello">
      <div id={mode}>
        <span>
          {props.itemLeft} {props.itemLeft > 1 ? "Items left" : "Item left"}
        </span>
        <div className="filters" id={mode}>
          <div>{props.data}</div>
        </div>
        <span onClick={handleClearCompleted}>Clear completed</span>
      </div>
    </FiltersStyle>
  );
};

export default Filters;
