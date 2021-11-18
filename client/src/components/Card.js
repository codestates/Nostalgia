import React from 'react'
import './Card.css'


const Card =({ logo,brand_sort }) => {

    return(
        <botton className="logo_list" onClick = { ()=>brand_sort(logo.brand_name)} >
            <img className="logo_img" src={`${process.env.REACT_APP_API_URL}/image/${logo.logo_img}`}/>
    </botton>
    );
}

export default Card;