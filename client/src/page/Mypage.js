import React, { useState, useEffect } from "react"
import './mypageStyle.css'
import PwUpdate from '../components/PwUpdate'
import NameUpdate from "../components/NameUpdate"
import UserDelete from "../components/UserDelete"
import Footer from "../components/Footer"
import LukaHeader from "../components/LukaHeader"
import FavoriteList from "../components/FavoriteList"
import ReviewList from "../components/ReviewList"

import axios from 'axios'
import Review from "../components/Review"


function Mypage () {
    
    // 모달 제어하는 useState()
    const [pwModal, setPewModal] = useState(false)
    const [nameModal, setNameModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [userRender, setUserRender] = useState(false);

    const [favoiList, setFavoiList] = useState([])
    const [reviewList, setreviewList] = useState([])   
    const [userInfo, setUserInfo] = useState([])
    const [userInfoimage, setuserInfoimage] = useState([])

    const handlePwModal = (el) => {
        setPewModal(el)
    }

    const handleNameModal = (el) => {
        setNameModal(el)
    }

    const hadleDelteModal = (el) => {
        setDeleteModal(el)
    }

    const handleNameRenderModal=(el)=>{
        setUserRender(el);
    }

    const image = '';

    //  ########### UserInfo 요청 ########### 
    useEffect(async() => {
        const userdata = await axios
         .get("https://localhost:4000/user/userinfo/userdata",
          {
              headers: { "Content-Type": "application/json" }, 
              withCredentials: true
          }
        )
    
        const favoritedata = await axios
        .get("https://localhost:4000/favorite/get-favorite",
            {
                headers: { "Content-Type": "application/json" }, 
                withCredentials: true
            }
        )

        const myreviewdata = await axios
        .get("https://localhost:4000/review/myreview",
         {
             headers: { "Content-Type": "application/json" }, 
             withCredentials: true
         }
       )
        setUserRender(false);
        setUserInfo(userdata.data.data);
        setFavoiList(favoritedata.data.data)
        setreviewList(myreviewdata.data.data)
       
      }, [userRender])


    return (
        <>
        <div className="parents_layer">
            <LukaHeader/>
            <div className="test"></div>
            <main className="main">
                <section className="mypage_container">
                    <div className="mypage_info">
                        <div className="mypage_header">
                            <h1 className="mypage_title">My Information</h1>
                        </div>
                        <div className="mypage_image-box">
                            <div className="mypage_image-size">
                                <img className="mypage_image" src={`https://localhost:4000/${userInfo.profile_img}`}></img>
                            </div>
                        </div>   
                        <div className="mypage_text-box">
                            <div>
                                <div className="mypage_font">
                                    💌 이메일
                                </div>
                                <div className="mypage_info_font">
                                    {userInfo.email}
                                </div>
                            </div>
                        </div>
                        <div className="mypage_text-box">
                            <div>
                                <div className="mypage_font">
                                    👱 닉네임
                                </div>
                                <div className="mypage_info_font">
                                   {userInfo.user_name}
                                </div>
                            </div>
                        </div>
                        <div className="mypage_button-box">
                            <div>
                                <button className="mypage_change-button" onClick={handlePwModal}>비밀번호 변경</button>
                                <button className="mypage_change-button" onClick={handleNameModal}>닉네임 변경</button>
                            </div>
                        </div>
                        <div className="mypage_button-box">
                            <div>
                                <button className="mypage_delete-button" onClick={hadleDelteModal}>  회원탈퇴  </button>
                            </div>
                        </div>        
                    </div>
                    
                    <div className="mypage_record">

                        <section className="mypage_favoriate">         
                            <ul className="favoriate_box">
                                <h3 className="favoriate_list_title">찜하기 목록</h3>
                                 {/* ################## Component 분리해야 antipattern 벗어남 !! ################### */}    
                                 {favoiList.map((el) => <FavoriteList item={el}/>)}
                            </ul>
                        </section>

                        <section className="mypage_review">
                            <ul className="mypage_review_box">
                                <h3 className="review_list_title">Review 목록</h3>
                                {/* <ReviewList/> */}
                                {reviewList.map((el) => <ReviewList list={el}/>)}
                            </ul>
                        </section>
                    </div>
                </section> 
            </main>
            <Footer></Footer>
            {pwModal ? <PwUpdate result={handlePwModal}/> : ''}
            {nameModal ? <NameUpdate result={handleNameModal} randering={handleNameRenderModal}/> : ''}
            {deleteModal ? <UserDelete result={hadleDelteModal}/> : ''}
          </div>
        </>
    )
}

export default Mypage
