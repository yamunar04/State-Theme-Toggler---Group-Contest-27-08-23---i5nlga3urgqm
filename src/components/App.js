import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [text, setText] = useState({
    buttonText: "Switch to Dark Mode",
    h1text: "Light Mode Activated"
  })

  const light = { backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)" };
  const dark = { backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)" };

  const handelClick = () => {
    if (!isDarkMode) {
      setIsDarkMode(true);
      const nObj = {
        ...text,
        buttonText: "Switch to Light Mode",
        h1text: "Dark Mode Activated"
      }
      setText(nObj);

    } else {
      setIsDarkMode(false);
      const nObj = {
        ...text,
        buttonText: "Switch to Dark Mode",
        h1text: "Light Mode Activated"
      }
      setText(nObj);

    }
  }

  return ( <div className={`App ${theme === "light" ? "light" : "dark"}`}> <h1>Newton School</h1> <div> <form> <label>UserName</label> <input></input> <label>Password</label> <input></input> <button>Login</button> </form> </div> <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label> <input type="checkbox" id="switch" onChange={toggleTheme} /> <label htmlFor="switch" className="label"> Toggle </label> </div> ); } 



export default App;
