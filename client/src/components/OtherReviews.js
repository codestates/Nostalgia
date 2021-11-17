import React from "react";
import "./OtherReviews.css";

export default function Reviews({otherReview}) {
  return (
    <li className="review_container">
      <div className="review_col">
        <div className="other_avg">
          <span className="avg">평점:</span>
        </div>

        <div className="other_user_info">
          <span className="img_cont">
            <img className="img" />
          </span>
          <span className="other_user_name">너의 이름이 무엇이냐</span>
        </div>
      </div>

      <div className="review_col_2">
        <div className="review_content">
          내용 내용 내용
          <br />
          내용내 용내용 내용내 용내용
          <br />
        </div>
        <div className="like_total_container">
          <button className="thumb_up">버튼</button>
          <span className="thumb_up_cnt">total: 123456</span>
        </div>
      </div>
    </li>
  );
}
