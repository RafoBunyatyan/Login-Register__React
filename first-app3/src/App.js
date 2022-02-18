import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from './Components/context';

function App() {
  const [showRegister, setShowRegister] = useState(true);
  const [showValue, setShowValue] = useState(false);
  const { theme } = useContext(Theme);

  if (theme) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  };

  useEffect(() => {
    setShowValue(!!localStorage.getItem("token"));
  }, [showValue]);

  const handleClick = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      <Router>
        <Nav
          showValue={showValue}
          showRegister={showRegister}
          handleClick={handleClick}
        />
        <Switch>
          <Route path="/" exact>

          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        {showRegister ? (
          <Route path="/login">
            <Login setShowValue={setShowValue} />
          </Route>
        ) : (
          <Route path="/register">
            <Register setShowValue={setShowValue} />
          </Route>
        )}
      </Router>
    </>
  );
};

export default App;