import React, { useState } from "react"
import './mypageStyle.css'
import PwUpdate from '../components/PwUpdate'
import NameUpdate from "../components/NameUpdate"
import UserDelete from "../components/UserDelete"
import Footer from "../components/Footer"
import LukaHeader from "../components/LukaHeader"
import FavoriteList from "../components/FavoriteList"
import ReviewList from "../components/ReviewList"

function Mypage () {
    
    const [pwModal, setPewModal] = useState(false)
    const [nameModal, setNameModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const handlePwModal = (el) => {
        setPewModal(el)
    }

    const handleNameModal = (el) => {
        setNameModal(el)
    }

    const hadleDelteModal = (el) => {
        setDeleteModal(el)
    }

    return (
        <>
        <div className="parents_layer">
        <div className="child_layer">
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
                                    caifornialove.96@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="mypage_text-box">
                            <div>
                                <div className="mypage_font">
                                    👱 닉네임 
                                </div>
                                <div className="mypage_info_font">
                                    CaliforniaLuv
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
                                 {/* ################## Component 분리해야 antipattern 벗어남 !! ################### */}
                            </ul>
                        </section>

                        <section className="mypage_review">
                            <ul className="review_box">
                                <h3 className="review_list_title">Review 목록</h3>
                                <ReviewList/>
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
          </div>
        </>
    )
}

export default Mypage