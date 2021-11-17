import './LoginSuccessStyle.css'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Animation() {

    
    const history = useHistory();

    
     
     setTimeout(() => {
        history.push('/main')
     }, 5000)
    


    return(
        <>
            <div className="center">
                <img className="smoke" src="/smoke.png"/>
                <img className="perfume" src="/perfume.png"/>
            </div>
        </>
    )

}

export default Animation;