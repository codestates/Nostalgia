import React from "react"
import './mypageStyle.css'

function Mypage () {
    
    return (
        <>
            <main className="main">
                <section className="mypage_container">
                    <div className="mypage_info">
                        <div className="mypage_header">
                            <h1 className="mypage_title">My Information</h1>
                        </div>
                        <div className="mypage_image-box">
                            <div className="mypage_image-size">
                                <img className="mypage_image" src="/perfume_sign_1.jpg"></img>
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
                                <button className="mypage_change-button">비밀번호 변경</button>
                                <button className="mypage_change-button">닉네임 변경</button>
                            </div>
                        </div>
                        <div className="mypage_button-box">
                            <div>
                                <button className="mypage_delete-button">  회원탈퇴  </button>
                            </div>
                        </div>        
                    </div>
                    
                    <div className="mypage_record">

                        <section className="mypage_favoriate">         
                            <ul className="favoriate_box">
                                 {/* ################## Component 분리해야 antipattern 벗어남 !! ################### */}
                                <li className="favoriate_list">
                                    <div className="favoriate_img-border">
                                        <div className="favoriate_img-box">
                                            <img className="favoriate_img" src="/perfume.jpeg"></img>
                                        </div>
                                    </div>
                                    <ul className="favoriate_totalList">
                                    <div className="list_day">2021-11-12</div> 
                                        <li className="favoriate_totalList-box">
                                            Product: CHANEL No.5        
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Brand: CHANEL
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Rating: 별 점수에 대한 기능 구현 필요.....
                                        </li>
                                    </ul>
                                </li>
                                <li className="favoriate_list">
                                    <div className="favoriate_img-border">
                                        <div className="favoriate_img-box">
                                            <img className="favoriate_img" src="/perfume.jpeg"></img>
                                        </div>
                                    </div>
                                    <ul className="favoriate_totalList">
                                    <div className="list_day">2021-11-12</div> 
                                        <li className="favoriate_totalList-box">
                                            Product: CHANEL No.5        
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Brand: CHANEL
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Rating: 별 점수에 대한 기능 구현 필요.....
                                        </li>
                                    </ul>
                                </li>
                                <li className="favoriate_list">
                                    <div className="favoriate_img-border">
                                        <div className="favoriate_img-box">
                                            <img className="favoriate_img" src="/perfume.jpeg"></img>
                                        </div>
                                    </div>
                                    <ul className="favoriate_totalList">
                                    <div className="list_day">2021-11-12</div> 
                                        <li className="favoriate_totalList-box">
                                            Product: CHANEL No.5        
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Brand: CHANEL
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Rating: 별 점수에 대한 기능 구현 필요.....
                                        </li>
                                    </ul>
                                </li>
                                <li className="favoriate_list">
                                    <div className="favoriate_img-border">
                                        <div className="favoriate_img-box">
                                            <img className="favoriate_img" src="/perfume.jpeg"></img>
                                        </div>
                                    </div>
                                    <ul className="favoriate_totalList">
                                    <div className="list_day">2021-11-12</div> 
                                        <li className="favoriate_totalList-box">
                                            Product: CHANEL No.5        
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Brand: CHANEL
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Rating: 별 점수에 대한 기능 구현 필요.....
                                        </li>
                                    </ul>
                                </li>
                                <li className="favoriate_list">
                                    <div className="favoriate_img-border">
                                        <div className="favoriate_img-box">
                                            <img className="favoriate_img" src="/perfume.jpeg"></img>
                                        </div>
                                    </div>
                                    <ul className="favoriate_totalList">
                                    <div className="list_day">2021-11-12</div> 
                                        <li className="favoriate_totalList-box">
                                            Product: CHANEL No.5        
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Brand: CHANEL
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Rating: 별 점수에 대한 기능 구현 필요.....
                                        </li>
                                    </ul>
                                </li>
                                <li className="favoriate_list">
                                    <div className="favoriate_img-border">
                                        <div className="favoriate_img-box">
                                            <img className="favoriate_img" src="/perfume.jpeg"></img>
                                        </div>
                                    </div>
                                    <ul className="favoriate_totalList">
                                    <div className="list_day">2021-11-12</div> 
                                        <li className="favoriate_totalList-box">
                                            Product: CHANEL No.5        
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Brand: CHANEL
                                        </li>
                                        <li className="favoriate_totalList-box">
                                            Rating: 별 점수에 대한 기능 구현 필요.....
                                        </li>
                                    </ul>
                                </li>
                                 {/* ################## Component 분리해야 antipattern 벗어남 !! ################### */}
                            </ul>
                        </section>

                        <section className="mypage_review">
                            <ul className="review_box">
                                <li className="review_list">
                                    <div className="favoriate_img-border">
                                       
                                    </div>
                                    <div className="list_day">2021-11-12</div> 
                                </li>
                            </ul>
                        </section>
                    </div>
                </section> 
            </main>
        </>
    )
}

export default Mypage