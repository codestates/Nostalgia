import React, {useState} from 'react'
import './Main.css'


const Main = () => {

const [display, setDisplay] = useState([false, false, false, false])

const outMouseDisplay = (index) =>{
    let newDisplay =[...display];
    newDisplay[index] = false;
    setDisplay(newDisplay);
}

const inMouseDisplay = (index) =>{
    let newDisplay =[...display];
    newDisplay[index] = true;
    setDisplay(newDisplay);
}

    return (
        <body>
            <div className="brand_logo_container"/>
            <div className="brand_logo_list"/>
        </body>
    )
}

export default Main