import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Textsection from "./Components/Textsection";
import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const [darkmode, setDarkmode] = useState("Enable_Dark_Mode");
  const changeMode = () => {
    console.log("clicked");
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#012415";
      document.title = "Dark_Mode-Text_Converter";
      setDarkmode("Disable_Dark_Mode");
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.title = "Text_Converter";
      setDarkmode("Enable_Dark_Mode");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          changeMode={changeMode}
          darkmode={darkmode}
          title="Text_Coverter"
        />
        <Routes>
          <Route path="/" element={<Textsection mode={mode} />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
