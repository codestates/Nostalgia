import React , {useEffect, useState} from 'react';
import Header from'../components/Zeenii_Header'
import Review from '../components/Review'
import axios from 'axios';
import Star from '../components/Star'
import './Item.css';
import { UilFavorite } from '@iconscout/react-unicons'
import OtherReviews from'../components/OtherReviews'

const Item = () =>{

const [otherReview, setOtherReview] = useState([])
const [review, setReiview] = useState('')
const [count, setCount] = useState('')
const [favorite, setFavorite] = useState(false)
const [addFav, setAddFav] = useState(false)
const [item, setItem] = useState({})
const [rating, setRating] = useState(0)

// 해당 제품에 대한 평점
const [starAvg, setStarAvg] = useState('')

useEffect(async () => {
    await axios.
    post("https://localhost:4000/perfume/get-perfume-info", 
    {
        perfume_id: 1
    },
    {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
    }
    )
    .then((res) => {
        setItem(res.data.data)
        setRating(res.data.avg_rating.avg_rating)
    })
}, [])

console.log(rating)
console.log(item)


useEffect(async () => {
    await axios
    .post("https://localhost:4000/review/get-review-info", {
        perfume_id: 1
    },{
        headers: { "Content-Type": "application/json" },
        withCredentials: true
    }).then((res)=>{
        console.log(res.data.data)
        setOtherReview(res.data.data)
    })
},[])

    console.log(otherReview)
// perfume_id, user_name, profile_img 'id','perfume_id','comment','rating','createdAt'



    const typingReview = (e) => {
        setReiview(e.target.value)
    }

    const typingCount = (e) => {
        setCount(e.target.value)
    }

    console.log(count)

    // const toggleFavorite = async(e) => {
    //     const res = await axios.post ()
    // }

    const handleReview = async () => {
        await axios.
            post("https://localhost:4000/review/add-review",
                {   
                    // token으로 줄 예정이라 향후 user_id는 필요 없음.
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

        const handleThumbup = async () =>{
            //add-favorite 
           await axios.post('https://localhost:4000/favorite/add-favorite',  
           { perfume_name:item.perfume_name,
                perfume_img:item.perfume_img,
                    brand_name:item.brand.brand_name}, 
            { headers: { "Content-Type": "application/json" },
            withCredentials: true
            }).then(res =>{
                if(res === 201) setAddFav(true);
            })
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
                            브랜드: {item.brand.brand_name}
                        <div>
                            
        
                        </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 
                            상품: {item.perfume_name}
                            </div>
                        <div>
                
                        </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 평점 : {rating}</div>
                        <Star star={String(rating)}/>
                        {/* <Star star={starAvg.avg_rating}> */}
                    </div>
                </div>

                <div className="item_info_box_prudect">
                    <div className="item_info_productname">
                        <div> 
                            국가 : {item.brand.country}
                            </div>
                        <div>
                            
                            {/* {`${otherReview.brand.country}`} */}
                        </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 찜하기: 
                            {!addFav ? (
                                    <button className="favorite-btn"
                                    onClick={handleThumbup}>A</button>
                                    ) : 
                                    (<button className="favorite-btn"
                                    >B</button> )}
                            </div>
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
                        {item.top.top_note_id}
                    </div>
                </div>
                <div>
                    middle
                    <div className="item_information">
                        {item.middle.middle_note_id}
                        {/* {`${otherReview.middle.middle_note_name}`} */}
                    </div>
                </div>
                <div>
                    base
                    <div className="item_information">
                        {item.base.base_note_id}
                        {/* {`${otherReview.base.base_note_name}`} */}
                    </div>
                </div>

            </div>
                <div className="item_information-box">
                    <div className="item_information-comment">
                        간략 설명
                        <div>
                        {item.comment}
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
            <button className="review_contanier-button" onClick={() => handleReview}>리뷰 쓰기</button>
        </main>
        <section className="item_container-section">
            <div className="item_container-reviewbox">
                <div className="item_container-reviewtitle">
                    Review List
                </div>
                <div>

                    {/* 작업하기 */}
                    <div className="item_container-review">
                        {/* <OtherReviews otherReview={otherReview[0]}/> */}
                        {otherReview.map((rev) => 
                          <OtherReviews otherReview={rev} />  
                        )}
                    </div>
                    {/* <div className="item_container-review">
                        sdfsddfsf
                    </div>   */}

                </div>
            </div>
        </section>
        </>
    )
}

export default Item