import './ReviewListStyle.css'
import { useState, useEffect } from 'react'

 function ReviewList({list}) {
    


    return(
        <>
            <li className="ReviewList_list">
                <div className="ReviewList_list-box">
                    <div className="ReviewList_product_font">
               
                    {list.perfume_info.perfume_name}
                    </div>
                    <div className="ReviewList_list_day-review">
                
                    {list.createdAt.slice(0, 10)}
                    </div> 
                </div>      
                <div>
                    <div className="ReviewList_comment">
                
                    {list.comment}
                    </div>
                </div>           
            </li>

        </>
    )
}

export default ReviewList