import React , {useEffect, useState} from 'react';
import Header from'../components/Zeenii_Header'
import Review from '../components/Review'
import axios from 'axios';
import Star from '../components/Star'
import './Item.css';

const Item = ({}) =>{

import {addFavorite, cancelFavorite, notify} from '../reducers/actions/index'

import axios from 'axios';


import { UilThumbsUp } from '@iconscout/react-unicons'


const Item = ({props}) =>{

const [perfumeInfo, setPerfumeInfo] = useState([]);
const [otherReview, setOtherReview] = useState('')
const [review, setReiview] = useState('')
const [count, setCount] = useState('')

// 해당 제품에 대한 평점
const [starAvg, setStarAvg] = useState('')

    useEffect(() => {
        axios.
          post("https://localhost:4000/perfume/get-perfume-info", 
            {
                perfume_id: 3
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }
        )
        .then((res) => {
            console.log(res.data)
            setOtherReview(res.data.data)
            setStarAvg(res.data.avg_rating)
        })
    }, [])


    const typingReview = (e) => {
        setReiview(e.target.value)
    }

    const typingCount = (e) => {
        setCount(e.target.value)
    }

    console.log("리뷰 작성하는 중 :", review)
    console.log("평점 매기는 중 :", count)
    console.log("퍼퓸 아이디", starAvg.perfume_id)


    const handleReview = async () => {
         await axios.
            post("https://localhost:4000/review/add-review",
                {   
                    perfume_id: starAvg.perfume_id,
                    comment: review,
                    rating: count

                },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )
          
        }


    return (
        <>
        <Header/>
        <section className="item_container-product">
            <div className="item_img-box">
                <img className="item_img"/>
            </div>

            <div className="item_info_container">
                        
                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 브랜드명 : </div>
                        <div>
                            
                            {/* {`${otherReview.brand.brand_name}`} */}
                        </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 상품명 : </div>
                        <div>
                            
                            {/* {`${otherReview.perfume_name}`} */}
                        </div>
                    </div>

                    <div className="item_box_fav_avg_container">
                        <div className="fav_box">
                            찜하기 
                            <button className="fav_btn">
                                <UilThumbsUp/>
                            </button>
                        </div>

                        <div className="avg_box">
                            평점
                        </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 평점 : </div>
                        <Star/>
                        {/* <Star star={starAvg.avg_rating}> */}
                    </div>
                </div>

                <div className="item_info_box_prudect">
                    <div className="item_info_productname">
                        <div> 국가 : </div>
                        <div>
                            
                            {/* {`${otherReview.brand.country}`} */}
                        </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 찜하기 </div>
                        <div>
                            
                
                        </div>
                    </div>
                </div>

            </div>   
        </section>
        <main className="item_container-main">
            <div className="item_info-title">
                상세 소개
            </div>
            <div className="item_information-box">
                <div>
                    top
                    <div className="item_information">
                        
                        {/* {`${otherReview.top.top_note_name}`} */}
                    </div>
                </div>
                <div>
                    middle
                    <div className="item_information">
                        
                        {/* {`${otherReview.middle.middle_note_name}`} */}
                    </div>
                </div>
                <div>
                    base
                    <div className="item_information">
                        
                        {/* {`${otherReview.base.base_note_name}`} */}
                    </div>
                </div>

            </div>
                <div className="item_information-box">
                    <div className="item_information-comment">
                        간략 설명
                        <div>
                        
                        {/* {`${otherReview.comment}`} */}
                        </div>
                        
                    </div>
                </div>
            <div>

            </div>
        </main>

        <main className="item_container-main2">
            <div className="item_container-title-box">
                <div>
                    리뷰 입력
                </div>
                <div className="item-rating-box">
                    <div className="item-rating-word">평점</div>
                    <input type="number" className="item-rating-count" onChange={typingCount}></input>
                </div>
            </div>
            <input className="review_contanier-typing" onChange={typingReview}></input>
            <button className="review_contanier-button" onClick={handleReview}>리뷰 쓰기</button>
        </main>
        <section className="item_container-section">
            <div className="item_container-reviewbox">
                <div className="item_container-reviewtitle">
                    Review List
                </div>
                <div>

                    {/* 작업하기 */}
                    <div className="item_container-review">
                        sdfsddfsf

                    </div>
                    <div className="item_container-review">
                        sdfsddfsf
                    </div>  

                </div>
            </div>
        </section>
        </>
    )
}

export default Item