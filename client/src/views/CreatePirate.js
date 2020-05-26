import React from 'react';
import PirateForm from '../components/PirateForm';
import { navigate } from '@reach/router';

export default props =>{
    const newPirate = {
        name: '',
        treasure: 0,
        imageUrl: '',
        phrase: '',
        position: '',
        desc: {
            hook: true,
            eye: true,
            peg: true
        }
    };

    return (
        <div>
            <div>
                <h3>Add Pirate</h3>
                <button onClick={e => navigate('/pirates')}>Crew Board</button>
            </div>
            <PirateForm pirate={newPirate} method="post" url="http://localhost:8000/new"/>
        </div>
    )
}
