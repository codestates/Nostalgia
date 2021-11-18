import React, {useEffect, useState} from "react";
import "./OtherReviews.css";
import axios from 'axios';
import { UilFavorite } from '@iconscout/react-unicons'

export default function OtherReviews({ otherReview }) {

  const [total, setTotal] =useState(0)

  const handleLikeup = () => {
    axios.post('https://localhost:4000/review/like-review', 
    { review_id:otherReview.id }, 
    { headers: { "Content-Type": "application/json" },
                  withCredentials: true
    })
}

  useEffect(() => {
    axios.post('https://localhost:4000/review/number-of-like',
    {review_id:otherReview.id}, 
    { headers: { "Content-Type": "application/json" },
                  withCredentials: true
    }).then(res => {setTotal(res.data.data.number_review_likes)})
  },[])
 

//`https://localhost:4000/image/${otherReview.user.profile_img}`
  return (
    <li className="review_container">
      <div className="review_col">
        <div className="other_avg">
          <span className="avg">평점:{otherReview.rating}</span>
        </div>

        <div className="other_user_info">
          <span className="img_cont">
            <img className="img" src={`https://localhost:4000/image/${otherReview.user.profile_img}`}/> 
          </span>
          <span className="other_user_name">{otherReview.user.user_name}</span>
        </div>
      </div>

      <div className="review_col_2">
        <div className="review_content">
        {otherReview.comment}
        </div>
        <div className="like_total_container">
          <button className="thumb_up" onClick={handleLikeup}><UilFavorite/></button>
          <span className="thumb_up_cnt">total: {total}</span>
        </div>
      </div>
    </li>
  );
}
