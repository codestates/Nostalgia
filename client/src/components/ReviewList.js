import './ReviewListStyle.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

 function ReviewList({list}) {
    


    return(
        <>
            <li className="ReviewList_list">
                <div className="ReviewList_list-box">
                    <div className="ReviewList_product_font">{14}
                    {/* {list.perfume_info.perfume_name} */}
                    </div>
                    <div className="ReviewList_list_day-review">{554}
                    {/* {{list.createdAt.slice(0, 10)}} */}
                    </div> 
                </div>      
                <div>
                    <div className="ReviewList_comment">
                    {456456}
                    {/* {list.comment} */}
                    </div>
                </div>           
            </li>

        </>
    )
}

export default ReviewList