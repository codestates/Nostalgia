import React, {useState, useEffect} from 'react'
import Header from '../components/Zeenii_Header'
import './Main.css'
import { chevronDown } from "@fortawesome/free-solid-svg-icons"
import Perfume from '../components/Perfume'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import Listitem from '../components/Listitem'
import Card from '../components/Card'

import axios from 'axios'


const Main = ({}) => {


const [item, setItem] = useState(null)
const [logo, setLogo] = useState(null);
const [itemList, setItemList] = useState([]);
const [logoList, setLogoList] = useState([]);
const [filterItem, setFilterItem] = useState(null);
const [error, setError] = useState(null);
const [isFilter, setIsFilter] = useState(false);

const [specPage, setSpecPage] = useState([])

useEffect(() => {
    axios
    .all([axios.get('https://localhost:4000/brand/logo', 
    { headers: { "Content-Type": "application/json" },
        withCredentials: true}), 
    axios.get('https://localhost:4000/perfume/get-perfume-info-all',
    { headers: { "Content-Type": "application/json" },
        withCredentials: true})
    ])
    .then (
        axios.spread((res1, res2) => {
            console.log(res1.data.data, res2.data.data);
            const logores = res1.data.data
            const itemres = res2.data.data
            setLogoList(logores);
            setItemList(itemres);
        })
    ).catch((err) => console.log(err));
},[])


console.log("Itme 담은 곳 : ", itemList)

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
                    {logoList.map(logo => (
                        <Card logoList={logo}/>
                    ))}
                </div>

                    <div className="filterwithcount_container">
                        <div className="checkbox_blank">리뷰 많은 순</div>
                        <div className="checkbox_blank">리뷰 적은 순</div>
                        <div className="checkbox_blank">평정 많은 순</div>
                        <div className="checkbox_blank">평점 적은 순</div>
                        <div className="count_item"> {`TOTAL : ${itemList.length}`}</div>
                    </div>
                    
                    <ui className="perfume_container">
                        {itemList.map(item => {
                            return (
                            <Link 
                            to='/item'
                            style={{textDecoration: 'none'}}>
                                <Listitem 
                                itemList={item}
                                specPage={item}/>
                                </Link>
                            )})}
                        </ui>
            </div>
            </>
    )
}

export default Main