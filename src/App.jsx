import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Provider } from "./context/theme-Context";
import ThemeContext from "./context/theme-Context";
import "./App.scss";

function App() {
  return (
    <>
      <Provider>
        <NavBar />
        <Header />
        <Projects />
      </Provider>
    </>
  );
}

export default App;
