import "./UserDeleteStyle.css";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

function UserDelete({result}) {
    
    const [hidden, setHidden] = useState('')
    const [password, setPassword] = useState('')
    const [userDeleteFail, setUserDeleteFail] = useState(false)

    const history = useHistory();


    const handleCloseModal = () => {
        setHidden('UserDelete_hidden')
        result(false)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleClick = async () => {
        //setUserDeleteFail(true)
        await axios
            .post("http://localhost:4000/user/delete-account", 
            {
                // 보류
                password: password
            },
            {
                headers: { "Content-Type": "application/json" }, 
                withCredentials: true
            }
        )

        // if(){
        //     history.push('/렌더링페이지')
        //     setUserDeleteFail(false)
        // } else {
        //     setUserDeleteFail(true)
        // }
    }

    return(
        <>
            <div class={`UserDelete_modal ${hidden}`}>
                <div class="UserDelete_modal-overlay"></div>
                <div class="UserDelete_modal-content">
                    <h1> 회원탈퇴 </h1>
                    <button class="UserDelete_modal-closeBtn" onClick={handleCloseModal}>❌</button>
                    <section className="UserDelete_box">
                        <h4 className="UserDelete_box_box-word"> ⛔️ 회원탈퇴 시 이용하신 정보가 모두 소멸됩니다. </h4>
                        <div>
                            <h4 className="UserDelete_info-word"> 기존 비밀번호를 입력 후 탈퇴 버튼을 눌려주세요.</h4>
                            <div className="UserDelete_passwordBox">
                                <input type="password" placeholder="비밀번호" className="UserDelete_box-input"
                                onChange={handlePassword}></input>
                                {userDeleteFail ? <h5 className="UserDelete_delete-word">비밀번호를 잘못 입력하셨습니다.</h5> : ''} 
                            </div>
                            <button className="UserDelete_button" onClick={handleClick}>회원탈퇴</button>
                            
                        </div>
                    </section>
                </div>
            </div>
        </>
    )

}
export default UserDelete