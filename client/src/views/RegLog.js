import React, { useState } from "react";
import axios from 'axios';
import { navigate } from "@reach/router";
import UserForm from "../components/UserForm";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        setErr('');
        axios.post('http://localhost:8000/api/user/login', {
            email,
            password
        }, { withCredentials: true })
            .then(()=> navigate('/pirates'))
            .catch(()=> setErr('Please check email/password'));
    }

    return(
        <div>
            <h1>Login</h1>
            {err && (
                <p style={{color:'red'}}>{err}</p>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        name="email"
                        value={email}
                        onChange ={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange ={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <h1>Register</h1>
            <UserForm/>
        </div>
    )
}
