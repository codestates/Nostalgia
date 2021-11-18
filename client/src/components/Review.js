import React from "react";
import "./Review.css";
import { UilThumbsUp } from '@iconscout/react-unicons'

const Review = ({ review }) => {
  // const parseDate = new Date(review.createdAt).toLocaleDateString("ko-kr");

  return (
    <li className="review_box">
      <div className="box_row">
        <div className="review_user_info">
          <div className="review_user_info_wrapper">
            <div className="others_img">
              <img />
            </div>
            <div className="review_username">이름작성{/*review.username*/}</div>
          </div>
        </div>

        <div className="review_content_container">
          <div className="other_avg"> 평점 </div>

          <div className="review_content">{/*review.content*/}</div>
        </div>
      </div>
      <div className="like_review_container">
        <button className="like_btn"><UilThumbsUp/></button>
        <span className="like_cnt">total:</span>
      </div>
    </li>
  );
};

export default Review;
