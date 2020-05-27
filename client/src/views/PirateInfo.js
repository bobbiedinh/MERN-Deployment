import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default ({id}) => {
    const [pirate, setPirate] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + id)
        .then(res => setPirate(res.data))
    }, [id]);

    if(pirate === null) return 'Loading...';

    return (
    <div style={{textAlign: 'center'}}>
        <h1>{pirate.name}</h1>
        <div style={{display:'inline-block', margin: '5px', verticalAlign: 'top'}}>
            <img src={pirate.imageUrl} alt={pirate.name}/>
            <h1>"{pirate.phrase}"</h1>
        </div>
        <div style={{display:'inline-block', margin: '5px', verticalAlign: 'top'}}>
            <h2>About</h2>
            <p>Position: {pirate.position}</p>
            <p>Treasures: {pirate.treasure}</p>
            <p>Peg Leg: {pirate.desc.peg ? 'Yes' : 'No'}</p>
            <p>Eye Patch: {pirate.desc.eye ? 'Yes' : 'No'}</p>
            <p>Hook Hand: {pirate.desc.hook ? 'Yes' : 'No'}</p>
        </div>
    </div>
    )
}