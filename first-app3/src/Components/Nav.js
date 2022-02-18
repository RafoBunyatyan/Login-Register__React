import React, { useContext } from "react";
import { Nav as NavBar, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Theme from "./context";

function Nav({ showRegister, handleClick, showValue }) {
	const { theme, setTheme } = useContext(Theme);

    return (
      <NavBar>
        <NavItem>
          <Link to="/">ToDo</Link>
        </NavItem>
        {showValue && (
          <>
            <NavItem>
              <Link to="/home">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/profile">Profile</Link>
            </NavItem>
          </>
        )}
        <Button color="warning" onClick={handleClick}>
          {showRegister ? (
            <Link to="/register">Register</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Button>
        <Button color={ theme ? "dark" : "primary" }
		  onClick={() => {
            setTheme(!theme);
          }}>{ theme ? "Dark" : "Ligth" }
        </Button>
      </NavBar>
    );
};

export default Nav ;