import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { HeaderStyle } from "./styles/header.styled";
import { ContainerStyle } from "./styles/container.styled";

const Header = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const [dimensions, setDimensions] = React.useState(window.outerWidth);
  React.useEffect(() => {
    function handleResize() {
      setDimensions(window.outerWidth);
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleClick = () => {
    return setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <HeaderStyle>
      {dimensions <= 500 ? (
        <img
          src={
            mode === "dark"
              ? "./images/bg-mobile-dark.jpg"
              : "./images/bg-mobile-light.jpg"
          }
        />
      ) : (
        <img
          src={
            mode === "dark"
              ? "./images/bg-desktop-dark.jpg"
              : "./images/bg-desktop-light.jpg"
          }
        />
      )}

      <ContainerStyle>
        <div id={mode}>
          <h1>TODO</h1>
          <img
            src={
              mode === "dark"
                ? "./images/icon-sun.svg"
                : "./images/icon-moon.svg"
            }
            onClick={handleClick}
          />
        </div>
      </ContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
