import "./global.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import React from "react";
import { useState } from "react";

const btnTheme = {
  cursor: "pointer",
  backgroundColor: "firebrick",
  color: "lime",
  fontWeight: "bold",
  textTransform: "uppercase",
  height: "2rem",
  paddingInline: "0.5rem",
  position: "absolute",
  top: 0,
  right: 0,
};

export function App() {
  const [theme, setTheme] = useState("dark");
  const other = theme === "dark" ? "light" : "dark";

  function handleChangeTheme() {
    setTheme(other);
  }

  return (
    <div style={{ position: "relative" }}>
      <Header whichTheme={theme} />
      <Main whichTheme={theme} />
      <Footer whichTheme={theme} />
      <button type="button" style={btnTheme} onClick={handleChangeTheme}>
        Change to {other} mode
      </button>
    </div>
  );
}
