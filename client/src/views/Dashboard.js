import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import DeleteButton from '../components/DeleteButton';
export default props =>{
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000', {
            withCredentials:true
        })
            .then(res=>{
                res.data.sort((firstObj,secondObj)=>{
                    const fObj = firstObj.name.toUpperCase();
                    const sObj = secondObj.name.toUpperCase();
                    return (fObj< sObj) ? -1 : (fObj > sObj) ? 1 : 0;
                });
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log(err));
    },[]);

    const remove = id =>{
        setPirates(pirates.filter(pirate=>pirate._id!==id))
    }

    if(!loaded) return "Loading....";

    return(
        <div>
            <div style={{textAlign:'center'}}>
                <div>
                    <h2 style={{display:'inline-block'}}>Pirate Crew</h2>
                    <button style={{display:'inline-block'}} onClick={e => navigate('/pirate/new')}>Add Pirate</button>
                </div>
                {pirates.map((pirate, i)=>{
                    return (
                    <div style={{border: "1px solid black", margin: '4px'}} key={i}>
                        <img style={{display:'inline-block'}} src={pirate.imageUrl} alt={pirate.name}/>
                        <div style={{display:'inline-block', textAlign:"center"}}>
                            <h3>{pirate.name}</h3>
                            <button onClick={e=> navigate('/pirate/'+pirate._id)}>View Pirate</button>
                            <DeleteButton id={pirate._id} remove={remove}/>
                        </div>
                    </div>
                        )})}
            </div>
        </div>
    )
}