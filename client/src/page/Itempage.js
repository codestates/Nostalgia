import React , {useEffect, useState} from 'react';
import Header from'../components/Zeenii_Header'
import Review from '../components/Review'
import axios from 'axios';
import Star from '../components/Star'
import './Item.css';
import { UilFavorite as White} from '@iconscout/react-unicons'
import { UisFavorite as Black } from '@iconscout/react-unicons-solid'

import OtherReviews from'../components/OtherReviews'

const Item =({match}) =>{


const [otherReview, setOtherReview] = useState([])
const [review, setReiview] = useState('')
const [count, setCount] = useState('')
const [favorite, setFavorite] = useState(false)
const [addFav, setAddFav] = useState(false)
const [item, setItem] = useState({})
const [rating, setRating] = useState(0)
const [writereview,setWritereview] = useState(false);


 useEffect( async() => {
    const perfume_info = await axios.
    post("https://localhost:4000/perfume/get-perfume-info", 
    {
        perfume_id: Number(match.params.perfume_id.slice(1))
    },
    {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
    })
    
    const review_info = await axios
    .post("https://localhost:4000/review/get-review-info",
     {
        perfume_id:  Number(match.params.perfume_id.slice(1))
    },{
        headers: { "Content-Type": "application/json" },
        withCredentials: true
    })

    setItem(perfume_info.data.data);
    setRating(perfume_info.data.avg_rating.avg_rating);
    setOtherReview(review_info.data.data);
}, [writereview,addFav])



    const typingReview = (e) => {
        setReiview(e.target.value)
    }

    const typingCount = (e) => {
        setCount(e.target.value)
    }

    console.log(writereview);

    const handleReview =  () => {
         axios.
            post("https://localhost:4000/review/add-review",
                {   
                    // token으로 줄 예정이라 향후 user_id는 필요 없음.
                    perfume_id:  Number(match.params.perfume_id.slice(1,)),
                    comment: review,
                    rating: Number(count)
                },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            ).then(res=> {setWritereview(true)} )
        }

    const handleThumbup =  () =>{
            //add-favorite 
         axios
        .post('https://localhost:4000/favorite/add-favorite',  
        { 
            perfume_name:item.perfume_name,
            perfume_img:item.perfume_img,
            brand_name:item.brand.brand_name
        }, 
        { 
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        }).then(res =>{
            if(res.status === 201) setAddFav(true);
        })
    }

    
    

    return (
        <>
        
        <Header/>
    
       <section className="item_container-product">

            <div className="item_img-box">
               <img className="item_img" src={`https://localhost:4000/image/${item.perfume_img}`} />
            </div>
       
            <div className="item_info_container">

                    
                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                           브랜드: {item.brand!==undefined ? ( item.brand.brand_name  ):null }
                    </div>   
                </div> 
            

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 
                             상품: {item.perfume_name !==undefined ? ( item.perfume_name  ):null } 
                        </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 평점 : {rating}</div>
                        <Star star={rating}/>
                    </div>
                </div>

                <div className="item_info_box_prudect">
                    <div className="item_info_productname">
                        <div> 
                             국가 : {item.brand!==undefined ? ( item.brand.country  ):null}
                            </div>
                    </div>
                </div>

                <div className="item_info_box_brand">
                    <div className="item_info_brandname">
                        <div> 찜하기: 
                            {!addFav ? (
                                    <button className="favorite-btn"
                                    onClick={handleThumbup}><White /></button>
                                    ) 
                                    : 
                                    (<button className="favorite-btn"
                                    ><Black /></button> )}
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
                    TOP NOTE
                    <div className="item_information">
                        {item.top!==undefined ? ( item.top.top_note_name  ):null}
                    </div>
                </div>

                <div>
                    MIDDLE NOTE
                    <div className="item_information">
                    {item.middle!==undefined ? ( item.middle.middle_note_name  ):null}
                    </div>
                </div>

                <div>
                    BASE NOTE
                    <div className="item_information">
                    {item.base!==undefined ? ( item.base.base_note_name  ):null}
                    </div>
                </div>
            </div>

                <div className="item_information-box">
                    <div className="item_information-comment">
                        상품 설명
                        <div>
                        {item.comment !==undefined ? ( item.comment  ):null}
                        </div>
                        
                    </div>
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
                    <div className="item_container-review">
                        {otherReview.map((rev) => 
                          <OtherReviews otherReview={rev} />  
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Item