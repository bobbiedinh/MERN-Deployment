import React from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default ({id, remove}) =>{
    
    const onClick = e =>{
        confirmAlert({
            title: 'Confirm to remove pirate',
            message: "Are you sure you want to remove pirate?",
            buttons:[
                {
                    label: 'Walk the Plank',
                    onClick: () => {
                        axios.delete('http://localhost:8000/api/pirate/'+id)
                            .then(()=> remove(id))
                        }
                },
                {
                    label: 'Cancel',
                    onClick: () =>{
                    }
                }
            ]
        })
    }
    return (
        <button onClick={onClick}>Walk the Plank</button>
    )
}
