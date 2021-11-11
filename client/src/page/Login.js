import { useEffect, useState } from "react";
import styled from 'styled-components';
import './loginStyle.css';
import axios from "axios";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notNull, setNotNull] = useState(false)
    const [logResult, setLogResult] = useState(false)

    let checkEmail = (e) => {
        setEmail(e.target.value)
        setNotNull(false)
    }
    let checkPassword = (e) => {
        setPassword(e.target.value)
        setNotNull(false)
    }


    const handleLogin = async () => {
        const data = await axios
        .post('https://nostalgia.com/user/login', 
            {
                email: email,
                password: password
            },
            {
                headers: { "Content-Type": "application/json" }, 
                withCredentials: true
            }
        )

        if(!data) {
            setLogResult(true)
        }
    }

    // Login 공백 있을 경우 setNotNull은 useEffect에 의해 동작
    // 만일 useEffect가 없을 경우 무한 렌더링 현상으로 오류 발생
    // 종속 배열은 email, password에 의존함
    useEffect(() => {
        if(password === '' && email === '') {
            setNotNull(true)
        }
    }, [email, password])

    console.log(email)
    console.log(password)

    return(
        //위 header component 부착 필요
        <>
            <main className="login_main">
                <section className="login_container">
                    <div className="login_flexbox">
                        <aside className="login_aside">
                            <img src="/perfume.jpeg"/>
                        </aside>
                        <div className="login_menu">
                            <h4>Nostalgia를 방문해주셔서 감사합니다.</h4>
                            <h1>LOGIN</h1>
                            <form className="login_form">
                                <div className="login_inputbox">
                                    <input type='email' placeholder="이메일" className="input_line" onChange={checkEmail} />
                                </div>
                                <div className="login_inputbox">
                                    <input type='password' placeholder="패스워드" className="input_line" onChange={checkPassword} />
                                </div>
                                {logResult? <h4 className="login_font">로그인 정보가 없는 관계로 다시 입력해주세요.</h4>: ""}
                                {notNull ? <h4>로그인 정보를 입력해주세요.</h4>: ""}
                                <button type="submit" className="login_btn hover1" onClick={()=> handleLogin}>
                                    로그인    
                                </button> 
                            </form>      
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default Login