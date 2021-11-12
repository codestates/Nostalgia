import React, {useState} from 'react'
import Header from '../components/Header'
import './Main.css'
import { chevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const Main = () => {

const [display, setDisplay] = useState([false, false, false, false])
const [topRated, setTopRated] = useState(false)
const [lowRated, setLowRated] = useState(false)
const [maxReview, setMaxReview] = useState(false)
const [minReview, setMinReview] = useState(false)

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
            <div className="main_container">
            <Header/>
                <div className="brand_logo_container">
                        <a className="logo_list"></a>
                        <a className="logo_list"></a>
                        <a className="logo_list"></a>
                        <a className="logo_list"></a>
                        <a className="logo_list"></a>
                        <a className="logo_list"></a>
                </div>

                    <div className="filterwithcount_container">
                        <div className="checkbox_blank">리뷰 많은 순</div>
                        <div className="checkbox_blank">리뷰 적은 순</div>
                        <div className="checkbox_blank">평정 많은 순</div>
                        <div className="checkbox_blank">평점 적은 순</div>
                        <div className="count_item"> total: </div>
                    </div>
                    
                        <div className="perfume_container">
                            <div className="perfume_row_1_container">
                                <div className="perfume_item"/>
                                <div className="perfume_item"/>
                            </div>
                        </div>
            </div>
        </body>
    )
}

export default Main