import React from 'react'
import './Card.css'


const Card =({ logoList }) => {
console.log(logoList)
    return(
        <a className="logo_list" >
            <img className="logo_img" src={`https://localhost:4000/image/${logoList.logo_img}`}/>
    </a>
    );
}

export default Card;