import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import './Main.css'
import { chevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Perfume from '../components/Perfume'

import { useSelector, useDispatch} from 'react-redux'


const Main = () => {

// const itemState = useSelector((state) => state.state);

// const { perfumes } = itemState


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
        <body className="body">
            <div className="main_container">
            <Header/>
                <div className="brand_logo_container">
                        <a className="logo_list">
                            <img className="chanel_logo"
                            src='../image/chanel-logo.jpeg'/>
                        </a>
                        <a className="logo_list">
                            <img className="ck_logo"
                            src='../image/ck-logo.png'/>
                        </a>
                        <a className="logo_list">
                            <img className="davidoff_logo"
                            src='../image/davidoff-logo-vector.png'/>
                        </a>
                        <a className="logo_list">
                            <img className="guerlain_logo"
                            src='../image/guerlain-logo-vector.jpeg'/>
                        </a>
                        <a className="logo_list">
                            <img className="jo_malone_logo"
                            src="../image/jomalone-black.jpeg"/>
                        </a>
                        <a className="logo_list">
                            <img className="versace_logo"
                            src="../image/versace-logo.jpeg"/>
                        </a>
                </div>

                    <div className="filterwithcount_container">
                        <div className="checkbox_blank">리뷰 많은 순</div>
                        <div className="checkbox_blank">리뷰 적은 순</div>
                        <div className="checkbox_blank">평정 많은 순</div>
                        <div className="checkbox_blank">평점 적은 순</div>
                        <div className="count_item"> total: </div>
                    </div>
                    
                        <div className="perfume_container">
                            <div className="perfume_row_container">
                                {/* {perfumes.map((item,idx) => (
                                    <Perfume
                                    item={item}
                                    key={idx}/>
                                ))} */}
                            </div>
                            
                            <div className="perfume_row_container">
                            </div>
                        </div>
            </div>
        </body>
    )
}

export default Main