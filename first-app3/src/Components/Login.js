import React, { useState } from 'react';

function Login({ setShowValue }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api-nodejs-todolist.herokuapp.com/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
		  value),
    }).then((data) => {
        return data.json();
    }).then((data) => {
        localStorage.setItem("token", data.token);
        setShowValue(true);
        console.log(data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;