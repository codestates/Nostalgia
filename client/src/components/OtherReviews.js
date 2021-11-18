import React, {useEffect, useState} from "react";
import "./OtherReviews.css";
import axios from 'axios';
import { UilFavorite } from '@iconscout/react-unicons'
import { UisFavorite } from '@iconscout/react-unicons-solid'

export default function OtherReviews({ otherReview }) {

  const [total, setTotal] =useState(0)
  const [isLike,setIsLike]=useState(false);

  const handleLikeup = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/review/like-review`, 
    { review_id:otherReview.id }, 
    { headers: { "Content-Type": "application/json" },
                  withCredentials: true
    }).then((res)=> setIsLike(true));
}

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/review/number-of-like`,
    {review_id:otherReview.id}, 
    { headers: { "Content-Type": "application/json" },
                  withCredentials: true
    }).then(res => {setTotal(res.data.data.number_review_likes)})
  },[isLike])
 

//`https://localhost:4000/image/${otherReview.user.profile_img}`
  return (
    <li className="review_container">
      <div className="review_col">
        <div className="other_avg">
          <span className="avg">평점:{otherReview.rating}</span>
        </div>

        <div className="other_user_info">
          <span className="img_cont">
            <img className="img" src={`${process.env.REACT_APP_API_URL}/${otherReview.user.profile_img}`}/> 
          </span>
          <span className="other_user_name">{otherReview.user.user_name}</span>
        </div>
      </div>

      <div className="review_col_2">
        <div className="review_content">
        {otherReview.comment}
        </div>
        <div className="like_total_container">
        {!isLike 
        ? <button className="thumb_up" onClick={handleLikeup}><UilFavorite/></button>  
        : <button className="thumb_up" onClick={handleLikeup}><UisFavorite/></button>
        }
          <span className="thumb_up_cnt">TOTAL: {total}</span>
        </div>
      </div>
    </li>
  );
}
