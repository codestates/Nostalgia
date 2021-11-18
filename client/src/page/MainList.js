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

const [itemList, setItemList] = useState([]);
const [filterItem , setFilteritem] = useState([]);
const [logoList, setLogoList] = useState([]);
const [count,setCount] = useState(0);

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
            const result = itemres.sort(function (a, b) {
                return a.id - b.id;
            });
            setLogoList(logores);
            setItemList(itemres);
        })
    ).catch((err) => console.log(err));
},[])


useEffect(()=>{

},[count])




const sortreviewup =()=>{
    if(filterItem.length!==0){
        const result = filterItem.sort(function (a, b) {
            return b.number_review - a.number_review;
        });
        setCount(count+1);
        setFilteritem(result);
    }  
    else{
        const result = itemList.sort(function (a, b) {
            return b.number_review - a.number_review;
        });
        setCount(count+1);
        setItemList(result);
    } 
}

const sortreviewdown =()=>{
    if(filterItem.length!==0){
        const result = filterItem.sort(function (a, b) {
            return a.number_review - b.number_review;
        });
        setCount(count+1);
        setFilteritem(result);
    }  
    else{
        const result = itemList.sort(function (a, b) {
            return a.number_review - b.number_review;
        });
        setCount(count+1);
        setItemList(result);
    } 
}

const sortratingup =()=>{
    if(filterItem.length!==0){
        const result = filterItem.sort(function (a, b) {
            return b.number_review - a.number_review;
        });
        setCount(count+1);
        setFilteritem(result);
    }  
    else{
        const result = itemList.sort(function (a, b) {
            return b.number_review - a.number_review;
        });
        setCount(count+1);
        setItemList(result);
    } 
}

const sortratingdown =()=>{
    if(filterItem.length!==0){
        const result = filterItem.sort(function (a, b) {
            return a.number_review - b.number_review;
        });
        setCount(count+1);
        setFilteritem(result);
    }  
    else{
        const result = itemList.sort(function (a, b) {
            return a.number_review - b.number_review;
        });
        setCount(count+1);
        setItemList(result);
    } 
}


const brand_sort= (brand_name)=>{
    const filter = itemList.filter(el => el.brand.brand_name === brand_name)
    setCount(count+1);
    setFilteritem(filter);
}

console.log("Itme 담은 곳 : ", itemList)
console.log("filterItem",filterItem);

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
                        <Card logo={logo} brand_sort={brand_sort}/>
                    ))}
                </div>

                    <div className="filterwithcount_container">
                        <div className="checkbox_blank"> <button onClick={sortreviewup}>리뷰 많은 순 </button> </div>
                        <div className="checkbox_blank"> <button onClick={sortreviewdown}>리뷰 적은 순 </button> </div>
                        <div className="checkbox_blank"> <button onClick={sortratingup}>평점 높은 순 </button> </div>
                        <div className="checkbox_blank"> <button onClick={sortratingdown}>평점 낮은 순 </button> </div>

                       { filterItem.length!==0 ? <div className="count_item"> {`TOTAL : ${filterItem.length}`}</div> 
                       : <div className="count_item"> {`TOTAL : ${itemList.length}`}</div>  }

                    </div>
                    
                    <ui className="perfume_container">
                        
                      {
                        filterItem.length!==0 ? 
                                    filterItem.map(filterItem => {
                                        return (
                                            <Listitem itemList={filterItem} specPage={filterItem}/>
                                        )})  
                                    : 
                                    itemList.map(item => {
                                    return (
                                        <Listitem itemList={item} specPage={item}/>
                                    )})
                        }

                        </ui>
            </div>
            </>
    )
}

export default Main