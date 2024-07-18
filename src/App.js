import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom/dist";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#272a43";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Learning"
          aboutText="About learning"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
            <TextForm
              heading="Enter the text"
              mode={mode}
              showAlert={showAlert}
            />
          } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
