import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

import "./Logout.css"

const Logout = ({result}) => {

const history = useHistory();

const [hidden, setHidden] = useState('')

const handleCloseModal = () => {
    setHidden('logout_hidden')
    result(false)
}



// 로그아웃 요청 구현
const handleClickSubmit = async () => {
    
    const data = await axios
        .post('https://localhost:4000/user/signout', 
        
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }
        )

       // console.log(data)
    // 로그아웃 성공됐을시 해당 경로 자동이동 풀어줄것
     history.push("/LanderPage")
};

    return (
            <>
                <div class={`logout_modal ${hidden}`}>
                    <div class="logout_modal-overlay"></div>
                    <div class="logout_modal-content">
                        <h1>로그아웃 😴💤</h1>
                        <button class="logout_modal-closeBtn" onClick={handleCloseModal}>❌</button>
                        <section className="logout_box">
                                
                            <div className="logout_box-size">
                                <h4 className="logout_box-word">로그아웃을 하시겠습니까?</h4>
                                <div className="logout_box-inputline">
                                    
                                    <button className="logout_button" onClick={handleClickSubmit}>로그아웃</button>
    
                                </div>
                            </div>                            
                        </section>
                    </div>
                </div>
            </>
    )
}

export default Logout