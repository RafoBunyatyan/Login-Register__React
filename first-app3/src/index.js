import React, { useState } from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Theme from "./Components/context";

function Main() {
  const [theme, setTheme] = useState(false);

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Theme.Provider>
  );
}

ReactDOM.render(
	<Main />, 
document.getElementById("root"));