import React, {useState, useEffect} from 'react'
import Header from '../components/Zeenii_Header'
import './Main.css'
import { chevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Perfume from '../components/Perfume'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import Listitem from '../components/Listitem'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'


const Main = ({}) => {


const [item, setItem] = useState(null)
const [itemList, setItemList] = useState([]);
const [logoList, setLogoList] = useState(null);
const [filterItem, setFilterItem] = useState(null);
const [error, setError] = useState(null);
const [isFilter, setIsFilter] = useState(false);

useEffect(() => {
    axios.
    get('http://localhost:4000/perfume/get-perfume-info-all' , {
        headers: { "Content-Type": "application/json" },
         withCredentials: true
    })
    .then(res => {
        console.log(res.data.data)
        // setItemList(res.data.data)
        console.log(itemList)
    });
},[])

const brandLogoImage = () => {
    axios.get()
}

    return (
        <>
            <Header/>
            <div className="main_container">
                    <div className="search_btn_container">
                        <button className="search_btn_icon">
                            <Search/>
                        </button>
                    </div>
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
                    
                        <ui className="perfume_container">
                        {itemList.map(item => (
                            <Listitem itemList={itemList}/>
                        ))}
                        </ui>
            </div>
            </>
    )
}

export default Main