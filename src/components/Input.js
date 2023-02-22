import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/ToDo-feature";
import { ContainerStyle } from "./styles/container.styled";
import { InputStyle } from "./styles/input.styled";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Input = () => {
  const { mode } = useContext(ThemeContext);
  const [inputValue, setInputValue] = React.useState("");

  const dispatch = useDispatch();

  const inputbox = React.useRef(null);
  React.useEffect(() => {
    inputbox.current.focus();
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo({ text: inputValue }));
      setInputValue("");
      inputbox.current.focus();
    }
  };
  return (
    <InputStyle id={mode}>
      <ContainerStyle>
        <input
          ref={inputbox}
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Create a new list"
          id={mode}
        />
      </ContainerStyle>
    </InputStyle>
  );
};

export default Input;
