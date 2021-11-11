import './signUpStyle.css';
import { useEffect, useState } from "react";
import { UilCheckCircle } from '@iconscout/react-unicons'
import axios from "axios";

function SignUp() { 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwCheck, setPwCheck] = useState('')
    const [username, setUsername] = useState('')

    const [pwConfirm, setPwConfirm] = useState(false)
    const [notsame, setNotsame] = useState(false)
    const [nameConfirm, setnameConfirm] = useState(false)

    let checkEmail = (e) => {
        setEmail(e.target.value)
    }
    let checkPassword = (e) => {
        setPassword(e.target.value)
    }
    let checkPWValue =  (e) => {
        setPwCheck(e.target.value)
    }
    let checkUsername = (e) => {
        setUsername(e.target.value)
    }

    // console.log('email: ', email)
    // console.log('password: ', password)
    // console.log('passwordCheck: ', pwCheck)
    // console.log('username: ', username)


    const value = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/.test(password)


    const handleLogin = async () => {   
        // 비밀번호와 비밀번호 확인이 같아야 하고, nameConfirm 중복 닉네임 검사까지 합격 받아야 로그인 가능
        if(password === pwCheck && nameConfirm) {
            const data = await axios
                .post("https://nostalgia.com/user/signup",
                    {
                        email: email,
                        password: password,
                        user_name: username,
                    },
                    {
                        headers: { "Content-Type": "application/json" }, 
                        withCredentials: true
                    }
                )
        }
    }

    const handleUserName = async () => {
        const data = await axios
        // 경로 보류
        .get("https://nostalgia.com/user/",
            {
                user_name: username,
            },
            {
                headers: { "Content-Type": "application/json" }, 
                withCredentials: true
            }
        )

        if(data) {
            setnameConfirm(true)
        }
    }

    useEffect(() => {
        // 비밀번호와 비밀번호 확인 검사 합격 여부
        if(password !== pwCheck && pwCheck !== '') { 
            setNotsame(true)
        } else {
            setNotsame(false)
        }
        
        // 비밀번호 유효성 검사 조합 합격 여부
        if(value) {
            setPwConfirm(true)
        } else {
            setPwConfirm(false)
        }
        
    }, [password, pwCheck])
    



    return(
        <>
            <main className="sign_main">
                <section className="sign_container">
                    <div className="sign_flexbox">
                        <div className="sign_menu">
                            <h1 className="sign_title_font">Sign Up</h1>
                            <h4 className="sign_info_font">회원가입하여 Nostalgia의 맞춤형 서비스를 이용해보세요</h4>
                            <form className="sign_form">
                                <div className="sign_inputbox">
                                    <input type='email' placeholder="이메일" className="sign_line" onChange={checkEmail}/>
                                </div>
                                <div className="sign_inputbox">
                                    <input type='password' placeholder="비밀번호" className="sign_line" onChange={checkPassword}/>
                                    <div className="font_box_top font_color">
                                        <h5>비밀번호는 8자리 이상과 영문+숫자+특수문자</h5>
                                        <h5>조합으로 입력해야 합니다.</h5>
                                        {pwConfirm ? <h5 className="font_box_top"> {<UilCheckCircle color="green"/>} 
                                        비밀번호 조합에 성공 하셨습니다. 🎉 </h5>: ''}
                                    </div>
                                </div>
                                <div className="sign_inputbox">
                                    <input type='password' placeholder="비밀번호 확인" className="sign_line" onChange={checkPWValue}/>
                                    <div className="font_box_top font_color_warning">
                                        {notsame ? <h5>비밀번호와 비밀번호 확인이 서로 다릅니다.</h5> : ''}
                                    </div>
                                </div>
                                <div className="sign_inputbox flex">
                                    <input placeholder="닉네임" className="sign_line" onChange={checkUsername}/>
                                    <button type="button" className="sign_btn_username" onClick={()=> handleUserName}>
                                    닉네임 중복 검사    
                                    </button>
                                </div>

                                <button type="button" className="sign_btn hover1" onClick={()=> handleLogin}>
                                    회원가입    
                                </button> 
                            </form>      
                        </div>
                        <aside className="sign_aside">
                            <img src="/perfume.jpeg"/>
                        </aside>
                    </div>
                </section>
            </main>
            <div>
                <div className="notice_message" >
                    <div>
                        <div class="notification-container" id="notification-container">
                            <p>You have already entered the letter</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default SignUp