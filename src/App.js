import React from "react";
import { ThemeContext } from "styled-components";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { ThemeProvider } from "styled-components";

function App() {
  const [mode, setMode] = React.useState("light");

  const theme = {
    color: {
      body: mode === "light" ? "#fafafa" : "#181824",
    },
  };

  return (
    <>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Input />
          <Todos />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
