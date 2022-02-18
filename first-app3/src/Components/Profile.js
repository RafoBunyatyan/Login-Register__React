import React, { useState, useEffect } from "react";

function Profile() {
    const [userData, setUserData] = useState(null);
    const [open, setOpen] = useState(false);
    const [age, setAge] = useState("");

	const handleSetOpen = () => {
    	setOpen(!open);
    };
 
    const handleGetUser = () => {
        fetch(`https://api-nodejs-todolist.herokuapp.com/user/me`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        }).then(data => {
            if(data.ok) {
                return data.json();
            };
        }).then(data => setUserData(data));
    };

    useEffect(() => {
      handleGetUser(); 
    }, []);

    const handleChange = () => {
        fetch(`https://api-nodejs-todolist.herokuapp.com/user/me`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                age,
			}),
        }).then(data => {
           return data.json();
        }).then(data => setUserData(data.data));
    };

    return (
        <>
            <h2>Profile</h2>
            {
                userData && <>
								<span>Name: {userData.name}</span><br />
								<span>Email: {userData.email}</span><br />
								<span>Age: {userData.age}</span><br />
								<button onClick={handleSetOpen}>Open</button>
								{
									open && <> 
												<input type="number" onChange={(e) => {
													setAge(e.target.value);
												}} /> 
												<button onClick={() => {
													handleChange();
													setOpen(false);
												}}>Sent</button>
											</>
								}
                			</>
            }
        </>
    );
};

export default Profile;