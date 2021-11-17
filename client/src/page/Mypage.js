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

function Mypage () {
    
    // 모달 제어하는 useState()
    const [pwModal, setPewModal] = useState(false)
    const [nameModal, setNameModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)



    const [favoiList, setFavoiList] = useState('')
    const [reviewList, setreviewList] = useState('')   
    const [userInfo, setUserInfo] = useState('')

    const handlePwModal = (el) => {
        setPewModal(el)
    }

    const handleNameModal = (el) => {
        setNameModal(el)
    }

    const hadleDelteModal = (el) => {
        setDeleteModal(el)
    }


    
    //  ########### UserInfo 요청 ########### 
    useEffect(() => {
        axios
         .get("http://localhost:4000/user/userinfo",
          {
              headers: { "Content-Type": "application/json" }, 
              withCredentials: true
          }
        ).then((data) => {
         setUserInfo(data.data.data)
          //console.log("유저 정보 요청: ", data.data.data)
        })
      }, [])






    //  ########### 찜하기 목록 요청 ###########
    useEffect(() => {

      axios
        .post("http://localhost:4000/favorite/get-favorite",
            {
                user_id: 1
            },
            {
                headers: { "Content-Type": "application/json" }, 
                withCredentials: true
            }
        )
       .then((data) => {
           console.log("찜하기 목록 요청: ", data.data)
           setFavoiList(data.data)
        })
    }, [])




    // ########### 리뷰 목록 요청 ########### 
    useEffect(() => {
        axios
         .post("http://localhost:4000/review/myreview",
          {
              user_id: 1
          },
          {
              headers: { "Content-Type": "application/json" }, 
              withCredentials: true
          }
        ).then((data) => {
        //   console.log("리뷰 목록 요청: ",data.data.data)
          setreviewList(data.data.data)
        })
      }, [])

     
    
    

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
                                <img className="mypage_image" src="/perfume_sign_1.jpeg"></img>
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
                                 <FavoriteList/>
                                {/* {favoiList.avg_rating.map((el) => <FavoriteList avgList={el} item={favoiList.data}/>)} */}
                            </ul>
                        </section>

                        <section className="mypage_review">
                            <ul className="mypage_review_box">
                                <h3 className="review_list_title">Review 목록</h3>
                               
                                <ReviewList/>
                            {/* {reviewList.map((el) => <ReviewList list={el}/>)} */}
                            </ul>
                        </section>
                    </div>
                </section> 
            </main>
            <Footer></Footer>
            {pwModal ? <PwUpdate result={handlePwModal}/> : ''}
            {nameModal ? <NameUpdate result={handleNameModal}/> : ''}
            {deleteModal ? <UserDelete result={hadleDelteModal}/> : ''}
          </div>
        </>
    )
}

export default Mypage