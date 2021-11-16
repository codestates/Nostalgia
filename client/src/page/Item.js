import React , {useState} from 'react';
import Header from'../components/Zeenii_Header'
import Review from '../components/Review'
import './Item.css';

const Item = () =>{

const [otherReview, setOtherReview] = useState('')

    return (
        <>
        <Header/>
        <div className="item_container">

            <div className="item_info_grid_con">
                <img className="item_img"/>
                    <div className="item_info_container">
                        <div className="item_info_box_brand">
                            <div className="item_info_brandname">
                            브랜드명 :
                        </div>
                    </div>

                    <div className="item_info_box_prudect">
                        <div className="item_info_productname">
                            상품명 :
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="item_info_specific_con">
                <div className="item_specific_box">
                    <div className="note_container">
                        <div className="note_value">
                            <div className='top_note'> Top </div>
                            <div className='mid_note'> Mid </div>
                            <div className='base_note'> Base </div>
                        </div>
                </div>

                <div className="note_guide">
                    <span className="note_guide_title">노트란 무엇인가요?</span>
                    <div className='note_guide_telling'>
                        노트는............<br/>
                        이러이러하고<br/>
                        저러저러합니다
                    </div>
                </div>

                <div className="item_intro">
                    내용 대략적으로 작성 
                </div>

                <div className="review_container">
                    <div className='review_count_box'>
                        <span className='review_title'>Review</span>
                        <span className='review_count'>Count : </span>
                    </div>
                </div>
                    <ul className='all_reviews'>
                        {/* {otherReview.map((el) => {
                            return <Review review={el}/>
                        })} */}
                        <Review/>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item