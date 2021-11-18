import "./NameUpdateStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function NameUpdate({result,randering}) {
    
    const [hidden, setHidden] = useState('')
    const [confirmSuccess, setConfirmSuccess] = useState(false)
    const [confirmFail, setConfirmFail] = useState(false)

    const [username, setUsername] = useState('')
    const [blanck, setBlank] = useState(false)


    const history = useHistory();

    // 공백 검사하는 기능
    useEffect(() => {
        for(let i = 0; i < username.length; i++) {
            if(username[i] === ' ') {
                setBlank(true);
                break;
            } else {
                setBlank(false);
            }
        }
    }, [username])


    const handleCloseModal = () => {
        setHidden('NameUpdate_hidden')
        result(false)
        randering(true)
    }

    const handleUserName = (e) => {
        setUsername(e.target.value)
    }



    const handleClick =  async () => {

        if(!blanck) {
            // 이건 서버 측에서 중복있는 없는지 알려줘서 data 변수에 결정
            const data = await axios.
                post(`${process.env.REACT_APP_API_URL}/user/change-username`, 
                    {
                        username: username
                    },
                    {
                        headers: { "Content-Type": "application/json" }, 
                        withCredentials: true
                    } 
                )
                .catch((err) => {
                    console.log("🚫 Not Found 🚫", err)
                    setConfirmFail(true)
                    setConfirmSuccess(false)
                })
        
            if(data) {
                setConfirmFail(false)
                setConfirmSuccess(true)
            } 
            
        } else {
            setConfirmFail(false)
            setConfirmSuccess(false)
        }
    }





    return(
        <>
            <div class={`NameUpdate_modal ${hidden}`}>
                <div class="NameUpdate_modal-overlay"></div>
                <div class="NameUpdate_modal-content">
                    <h1>닉네임 변경 👨‍💻</h1>
                    <button class="NameUpdate_modal-closeBtn" onClick={handleCloseModal}>❌</button>
                    <section className="NameUpdate_box">
                            
                        <div className="NameUpdate_box-size">
                            <h4 className="NameUpdate_box-word">새로운 닉네임을 입력해주세요.</h4>
                            <div className="NameUpdate_box-inputline">
                                <input type="text" className="NameUpdate_box-input" placeholder="새 닉네임" onChange={handleUserName}></input>

                                <button className="NameUpdate_button" onClick={handleClick}>닉네임 변경</button>

                                {confirmSuccess ? 
                                    <h5 className="NameUpdate_successs"> 
                                        ✅ 닉네임 변경에 성공하셨습니다. 
                                    </h5> : "" 
                                }
                                {confirmFail ?
                                    <h5 className="NameUpdate_successs"> 
                                        🚫 닉네임 변경에 실패하셨습니다. 
                                    </h5> : ""
                                } 

                                {blanck ?
                                    <h5 className="NameUpdate_successs"> 
                                        🚫 닉네임에 공백은 사용 불가입니다.
                                    </h5> : ""
                                }

                            </div>
                        </div>                            
                    </section>
                </div>
            </div>
        </>
    )

}
export default NameUpdate