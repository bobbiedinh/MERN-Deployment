import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router"

export default () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        passwordConfirmation:""
    });

    const handleChange= (e) =>{
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user', user, { withCredentials:true })
            .then(()=> navigate('/pirates'))
            .catch(console.log)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                        <input
                            name="firstName"
                            value={user.firstName}
                            onChange ={handleChange}
                        />
                </div>
                <div>
                    <label>Last Name: </label>
                        <input
                            name="lastName"
                            value={user.lastName}
                            onChange ={handleChange}
                        />
                </div>
                <div>
                    <label>Email: </label>
                        <input
                            name="email"
                            value={user.email}
                            onChange ={handleChange}
                        />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        name="password"
                        type="password"
                        value={user.password}
                        onChange ={handleChange}
                    />
                </div>
                <div>
                    <label>Password Confirmation: </label>
                    <input
                        name="passwordConfirmation"
                        type="password"
                        value={user.passwordConfirmation}
                        onChange ={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}