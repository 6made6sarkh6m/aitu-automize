import React from 'react';


import Assignments from './Assignments';

function AssignmentList ({assignments}){
    return(
        <>
            {assignments.map(data=>{
                return <Assignments data={data}></Assignments>
            })}
        </>
    )
}

export default AssignmentList;