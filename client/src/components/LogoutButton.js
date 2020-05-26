import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default () => {
    const handleClick= e => {
        axios.delete('http://localhost:8000/api/user/logout', { withCredentials:true})
            .then(() => navigate('/'))
            .catch(console.log);
    }

    return (
        <button onClick={handleClick}>Log Out</button>
    );
}