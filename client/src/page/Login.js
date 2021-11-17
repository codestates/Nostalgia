import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './loginStyle.css';
import useImageHook from '../components/ImageTime'
import axios from "axios";
import LukaHeader from "../components/LukaHeader";
import Footer from "../components/Footer";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notNull, setNotNull] = useState(false)
    const [logResult, setLogResult] = useState(false)

    // 이미지 애니메이션 훅 
    const [inClass, setIn] = useState('fade-in-bck')
    const [count, setCount] = useState(1);

    const [loginFail, setLoginFail] = useState(false)


    const history = useHistory();

    let checkEmail = (e) => {
        setEmail(e.target.value)
        setNotNull(false)
    }
    let checkPassword = (e) => {
        setPassword(e.target.value)
        setNotNull(false)
    }

    useEffect(() => {
        if(email === "" || password === "") {
            setLoginFail(false)
        }
    }, [email, password])


    const handleLogin = async () => {
        const data = await axios
        .post('https://localhost:4000/user/login', 
            {
                email: email,
                password: password
            },
            {
                headers: { "Content-Type": "application/json" }, 
                withCredentials: true
            }
        )
        .catch((err) => {
            setLoginFail(true)
            console.log("🚫 Not Found 🚫" , err)
        })

        console.log("로그인 결과", data)

        if(data) {
            setLoginFail(false)
            history.push('/loginSuccess')
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




     // ################################### 이미지 애니메이션 효과 훅으로 제작함 ################################### //
     useImageHook(() => {
        setIn('fade-in-bck')
        setCount(count + 1);
    }, 4000);
  
    useEffect(() => {
        setTimeout(()=> {
          setIn('')
        }, 1000)
    }, [count])
      
    if(count > 3) {
        setCount(1)
    }





    return(
        //위 header component 부착 필요
        <>  
        <div className="parents_layer">
            <LukaHeader/>
            <main className="login_main">
                <section className="login_container">
                    <div className="login_flexbox">
                        <aside className="login_aside">
                            <img className={`login_img ${inClass}`} src={`/perfume_login_${count}.jpeg`}/>
                        </aside>
                        <div className="login_menu">
                            <h1 className="login_title_font">LOGIN</h1>
                            <h4 className="login_info_font">Nostalgia를 방문해주셔서 감사합니다.</h4>
                            <form className="login_form">
                                <div className="login_inputbox">
                                    <input type='email' placeholder="이메일" className="input_line" onChange={checkEmail} />
                                </div>
                                <div className="login_inputbox2">
                                    <input type='password' placeholder="패스워드" className="input_line" onChange={checkPassword} />
                                    {logResult? <h4 className="login_font">로그인 정보가 없는 관계로 다시 입력해주세요.</h4>: ""}
                                    {notNull ? <h4 className="login_font-info">로그인 정보를 입력해주세요.</h4>: <h4 className="login_font-info">{}</h4>}
                                    {loginFail ? <h5 className="login_fail-word"> 
                                         로그인에 실패하셨습니다. 
                                        </h5> : ""
                                    }
                                </div>
                                
                                <button type="button" className="login_btn" onClick={handleLogin}>
                                    로그인    
                                </button> 
                            </form> 
                            <img src="/google_oAuth.png" className="login_OAuth-btn"></img>  
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
           </div>
        </>
    )

}

export default Login