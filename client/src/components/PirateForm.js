import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default ({pirate, method, url}) =>{
    const [name, setName] = useState(pirate.name);
    const [imageUrl, setImageUrl] = useState(pirate.image);
    const [phrase, setPhrase] = useState(pirate.phrase);
    const [treasure, setTreasure] = useState(pirate.treasure);
    const [position, setPosition] = useState(pirate.position);
    const [eye, setEye] = useState(pirate.desc.eye);
    const [hook, setHook] = useState(pirate.desc.hook);
    const [peg, setPeg] = useState(pirate.desc.peg);
    const [errors, setErrors] = useState([]);

    const onSubmit=e=>{
        e.preventDefault();
        setErrors([]);
        const desc = {
            "eye":eye,
            "hook":hook,
            "peg":peg
        }
        axios[method](url, {
            name,
            treasure,
            imageUrl,
            phrase,
            desc,
            position
        })
            .then(()=>navigate('/pirates'))
            .catch(err=>{
                const errorArr = [];
                const errorObj = err.response.data.errors;
                console.log(errorObj);
                for(const key in errorObj){
                    console.log(errorObj[key].properties.message);
                    errorArr.push(errorObj[key].properties.message);
                }
                setErrors(errorArr);
            },[]);
    }

    return(
        <div>
            {errors.map((err, i) => (<p key={i} style={{color:'red'}}>{err}</p>))}
            <form onSubmit={onSubmit}>
                <p>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/>
                </p>
                <p>
                    <label>Image Url: </label>
                    <input type="text" value={imageUrl} onChange={e=>{setImageUrl(e.target.value)}}/>
                </p>
                <p>
                    <label># of Treasure Chests: </label>
                    <input type="number" value={treasure} onChange={e=>{setTreasure(e.target.value)}}/>
                </p>
                <p>
                    <label>Pirate Catch Phrase: </label>
                    <input type="text" value={phrase} onChange={e=>{setPhrase(e.target.value)}}/>
                </p>
                <p>
                    <label>Position: </label>
                    <select onChange={e=>{setPosition(e.target.value)}}>
                        <option selected value="First Mate">Select Position</option>
                        <option value="Captian">Captian</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>
                <p>
                    <input type="checkbox"  value={!peg} checked={peg} onChange={e=>{setPeg(e.target.value)}}/>
                    <label>Peg Leg</label>
                    <input type="checkbox"  value={!eye} checked={eye} onChange={e=>{setEye(e.target.value)}}/>
                    <label>Eye Patch</label>
                    <input type="checkbox"  value={!hook} checked={hook} onChange={e=>{setHook(e.target.value)}}/>
                    <label>Hook Hand</label>
                </p>
                <button type='submit'>Add Pirate</button>
            </form>
        </div>
    )
}
