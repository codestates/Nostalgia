import React from 'react'
import './Postinput.css'
import axios from 'axios'


const Postinput = () => {

const handleSubmit = () => {
    axios.get('http://localhost:4000/review/add-review',)
}

    return (
        <li className="review_input_box">
            <div className="review_input_container">
                <input type='text' className="review_comment_input"
                        placeholder="리뷰를 남겨 주세요.">{/*review.content*/}</input>
                    <span className="input_btn_container">
                    <button type="submit" className="submit_btn">등록</button>
                    </span>
            </div>
        </li>
    )
}

export default Postinput