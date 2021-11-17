import React , {useState, useEffect} from 'react';
import Header from'../components/Zeenii_Header'
import Review from '../components/Review'
import Postinput from '../components/Postinput'
import './Item.css';

import {fetchData, hitTheThumbBtn} from '../reducers/actions/index'

import {addFavorite, cancelFavorite, notify} from '../reducers/actions/index'

import axios from 'axios';


import { UilThumbsUp } from '@iconscout/react-unicons'


const Item = ({props}) =>{

const [perfumeInfo, setPerfumeInfo] = useState([]);
const [otherReview, setOtherReview] = useState('')
const [thumbUp, setThumbUp] = useState([]);
// const dispatch = useDispatch();

// const {addFavorite} = useSelector((state) => state.favoritesReducer);
// const {cancelFavorite} = useSelector((state) => state.favoritesReducer);



useEffect(() =>{
    axios
    .get('http://localhost:4000/get-perfume-info',{perfuem_id: 1}, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
    })
    .then((res)=>{
        console.log(res.data);
        setPerfumeInfo(res.data)
    })
}, []);

const itemInfoHandler = () => {
    const {id, perfume_name} = perfumeInfo;
    if(!id || !perfume_name) {
        return;
    }
    axios
    .post('http://localhost:4000/perfume/get-perfume-info-all',{
        id, perfume_name})
        .then(res => {

        })
}

const handleFavoriteClick = () =>{
    // if(!cancelFavorite.map((el)=> el.favorite).includes(favorite.id)){
    //     dispatch(addFavorite(favorite.id));
    //     dispatch(notify('찜하기 목록에 추가 되었습니다.'))
    // } 
    // dispatch(notify('찜하기 목록에 삭제되었습니다.'))
}



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

                    <div className="item_box_fav_avg_container">
                        <div className="fav_box">
                            찜하기 
                            <button className="fav_btn">
                                <UilThumbsUp/>
                            </button>
                        </div>

                        <div className="avg_box">
                            평점
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
                    내용 대략적으로 작성 <br/>
                    내용 내용 내용 <br/>
                    내용 내용 내용 <br/>
                    내용 내용 내용 <br/>
                    내용 내용 내용 <br/>
                    내용 내용 내용 <br/>
                    내용 내용 내용 <br/>
                </div>

                <div className="review_container">
                    <div className='review_count_box'>
                    </div>
                        <span className='review_title'>Review</span>
                        <span className='review_count'>Count : </span>
                </div>
                    <ul className='all_reviews'>
                        {/* {otherReview.map((el) => {
                            return <Review review={el}/>
                        })} */}
                        <Postinput/>
                        <Review/>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item