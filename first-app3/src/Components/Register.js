import React, { useState } from "react";

function Register({ setShowValue }) {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        fetch(`https://api-nodejs-todolist.herokuapp.com/user/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(
                data),
        }).then(data => {
          return data.json();
        }).then(data => {
            localStorage.setItem("token", data.token);
            setShowValue(true);
            console.log(data);
        });
    };

    return (
        <>
			<form onSubmit={handleRegister}>
				<input type="text" onChange={handleChange} name="name" placeholder="Name" />
				<input type="email" onChange={handleChange} name="email" placeholder="Email" />
				<input type="password" onChange={handleChange} name="password" placeholder="Password" />
				<input type="number" onChange={handleChange} name="age" placeholder="Age" />
				<button>Register</button>
			</form>
        </>
    );
};

export default Register;