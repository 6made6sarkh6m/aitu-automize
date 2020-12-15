import React from 'react'
import {Progress} from 'reactstrap';

function ProgressBar(){
    return(
        <div className='progressbar-container'>
            <div className='text-center'> Graduation Progress</div>
            <Progress animated value={10*5} ></Progress>
        </div>
    )
}

export default ProgressBar;