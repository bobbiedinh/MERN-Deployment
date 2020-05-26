import React from 'react';
import axios from 'axios';

export default ({id, type}) =>{
    const [pirate, setPirate] = useState(null);
    
    useEffect(() => {
        axios.get('http://localhost:8000/pirate/' + id)
        .then(res => setPirate(res.data));
    }, []);

    return (
    <button onClick={e => onClick(e, id)}>{pirate[type] ? 'Yes' : 'No'}</button>
    )
}
