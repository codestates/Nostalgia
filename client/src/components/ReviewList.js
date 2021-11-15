import './ReviewListStyle.css'

function ReviewList() {

    return(
        <>
            <li className="ReviewList_list">
                <div className="ReviewList_list-box">
                    <div className="ReviewList_product_font">{"CHANEL No.5"}</div>
                    <div className="ReviewList_list_day-review">2021-11-12</div>
                </div>      
                <div>
                    <div className="ReviewList_comment">
                                {"우와 저어엉말 좋아요!! 최고에요!!!!우와 저어엉말 좋아요!! 최고에요!!!!!!"}
                    </div>
                    <div className="ReviewList_comment_good">
                        👍 : {""}
                    </div>
                </div>           
            </li>

        </>
    )
}

export default ReviewList