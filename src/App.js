import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled! ", "success");
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now'
      // },2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled! ", "success");
      // document.title = 'TextUtils - Light Mode'
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        about="AboutUs"
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route exact path="/about"
            element={<About mode={mode}/>}/>
          
          <Route exact path="/"
            element={<TextForm
              heading="TextUtils - Word Counter | Character Counter | Lowercace to Uppercase | Uppercase to Lowercase | Extra space remover"
              showAlert={showAlert}
              mode={mode}
            />}/>
          
        </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
