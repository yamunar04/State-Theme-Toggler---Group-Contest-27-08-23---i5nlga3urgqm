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

  return (
    <div id="main" style={isDarkMode ? dark : light}>
      <h1>{text.h1text}</h1>
      <button onClick={handelClick}>{text.buttonText}</button>
    </div>
  )
}


export default App;
