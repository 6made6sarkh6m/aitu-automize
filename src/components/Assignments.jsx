import React from 'react';
import '../../src/components/css/Assignments.css';
function Assignments({data}){

    return (
        <div className='container'>
            
            <span className='notify'>Your {data.text} of {data.cource} is due to {data.dt}</span>
        </div>
        
    )
}

export default Assignments;