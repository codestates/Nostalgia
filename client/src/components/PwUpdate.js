import "./PwUpdateStyle.css";
import { useEffect, useState } from "react";
import { UilCheckCircle } from '@iconscout/react-unicons'
import axios from "axios";

function PwUpdate({result}) {
    
    const [hidden, setHidden] = useState('')
    const [password, setPassword] = useState('')
    const [pwCheck, setPwCheck] = useState('')

    const [passwordConfirm, setConfirm] = useState(false)
    const [samePw, setSamePw] = useState(false)
    const [pwUpdatedClear, setPwUpdatedClear] = useState(false)
    const [pwupdatedFail, SetPwupdatedFail] = useState(false)


    
    const value = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/.test(password)


    const handleCloseModal = () => {
        setHidden('pwUpdate_hidden')
        result(false)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePwCheck = (e) => {
        setPwCheck(e.target.value)
    }

    const handleClick = async () => {
        // 비번이 서로 동일하고, 유효성 검사 또한 합격 여부 되어야 button으로 비번 변경 가능
        if(password === pwCheck && passwordConfirm) {
            const data = await axios
                .post('http://localhost:4000/user/change-password',
                {
                    password: password,
                },
                {
                    headers: { "Content-Type": "application/json" }, 
                    withCredentials: true
                }    
            )

            console.log(data)
            setPwUpdatedClear(true)
            SetPwupdatedFail(false)
        } 
        if(password !== pwCheck) {
            setPwUpdatedClear(false)
            SetPwupdatedFail(true)
        }
    }
    
    

    useEffect(() => {
        // 비밀번호와 비밀번호 서로 동일한지 검사
        if(password !== pwCheck && pwCheck !== '') {
            setSamePw(true)
        } else {
            setSamePw(false)
        }

        // 비밀번호 영문자+숫자+##$! 유효성 검사
        if(value) {
            setConfirm(true)
        } else {
            setConfirm(false)
        }
    }, [password, pwCheck])



    return(
        <>  
            <div class={`pwUpdate_modal ${hidden}`}>
                <div class="pwUpdate_modal-overlay"></div>
                <div class="pwUpdate_modal-content">
                    <h1>비밀번호 변경 🔐</h1>
                    <button class="pwUpdate_modal-closeBtn" onClick={handleCloseModal}>❌</button>
                    <section className="pwUpdate_box">
                            
                        <div className="pwUpdate_box-size">
                            <h4 className="pwUpdate_box-word">새로운 비밀번호를 입력해주세요.</h4>
                            <div className="pwUpdate_box-inputline">
                                <input type="password" className="pwUpdate_box-input" placeholder="새 비밀번호" onChange={handlePassword}></input>
                                {passwordConfirm ? 
                                    <h5 className="pwUpdate_successs"> 
                                        {<UilCheckCircle color="green"/>} 
                                        비밀번호 조합에 성공 하셨습니다. 🎉 
                                    </h5> :  ""}
                               </div>
                            <div className="pwUpdate_box-inputline">
                                <input type="password" className="pwUpdate_box-input" placeholder="새 비밀번호 확인" onChange={handlePwCheck}></input>
                                {samePw ? <h5 className="pwUpdate_warning">비밀번호와 비밀번호 확인이 서로 다릅니다.</h5> : ""}
                            </div>
                            <button className="pwUpdate_button" onClick={handleClick}>비밀번호 변경</button>
                            <div className="pwUpdate_box-inputline">
                                {pwUpdatedClear ? <h5 className="pwUpdate_successs-result">비밀번호 변경을 성공하였습니다.</h5> : ''}
                                {pwupdatedFail ? <h5 className="pwUpdate_warning">비밀번호 변경을 실패하셨습니다.</h5> : ''}  
                            </div>
                        </div>                            
                    </section>
                </div>
            </div>
        </>
    )

}
export default PwUpdate