import './signUpStyle.css';
import { useEffect, useState } from "react";
import { UilCheckCircle } from '@iconscout/react-unicons'
import useImageHook from '../components/ImageTime'
import axios from "axios";
import LukaHeader from '../components/LukaHeader';
import Footer from '../components/Footer';

function SignUp() { 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwCheck, setPwCheck] = useState('')
    const [username, setUsername] = useState('')

    // 이미지 애니메이션 훅 
    const [inClass, setIn] = useState('fade-in-bck')
    const [count, setCount] = useState(1);

    const [pwConfirm, setPwConfirm] = useState(false)
    const [notsame, setNotsame] = useState(false)
    const [nameConfirm, setnameConfirm] = useState(false)
    const [antMessage, setAntMessage] = useState(false)


    const [blanck, setBlank] = useState(false)

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
        // 비밀번호와 비밀번호 확인이 같아야 하고, nameConfirm 중복 닉네임 검사
        // 그리고 유효성 검사까지 합격 받아야 로그인 가능
        if(password === pwCheck && nameConfirm && pwConfirm) {
            await axios
                .post("http://localhost:4000/user/signup",
                    {
                        email: email,
                        password: password,
                        user_name: username,
                        // ################################## 이미지 전송에 대해 보류 ##################################
                    },
                    {
                        // ################################## Content-Type form 형식에 대해 보류 ##################################
                        headers: { "Content-Type": "application/json" }, 
                        withCredentials: true
                    }
                )
        }
    }


    const handleUserName = async () => {
    
        setAntMessage(true) 
    
        setTimeout(() => {
            // 6초가 지나야 아래 기능이 발생하는게 setTimeOut 메커니즘 동작법이다!!!!!!!!!!!!
            setAntMessage(false)
        }, 6000);



        const data = await axios
        // ################################## 닉네임 중복 검사 경로 보류 ##################################
        .get("https://nostalgia.com/user/",
            {
                user_name: username,
            },
            {
                headers: { "Content-Type": "application/json" }, 
                withCredentials: true
            }
        )

        if(data && !blanck) {
            setnameConfirm(true)
        } else {
            // 닉네임이 없으면 개미 메세지 On
            // setAntMessage(true)
            // console.log(antMessage)
            // setTimeout(() => {
            //     setAntMessage(false)
            // }, 3000);

        }
    }

    const handleImg = (e) => {
        e.preventDefault();
  
        if(e.target.files){
            const uploadFile = e.target.files[0]
            // 전송한 이미지가 담겨줘 있음.
            console.log(uploadFile)
            // js 내장객체인 FormData를 사용하여 이미지파일을 formData형식으로 
            const formData = new FormData()
            // append 메서드를 활용하여 key에 files, value에 uploadFile 각각 담아둔다.
            formData.append('files',uploadFile)
            console.log(formData)
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
    



    
 // ################################### 이미지 애니메이션 효과 훅으로 제작함 ################################### //
 
    useImageHook(() => {
        setCount(count + 1);
        setIn('fade-in-bck')
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
        <>  <LukaHeader/>
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
                                    <div className="font_box_top font_color sign_password_success">
                                        <h5>비밀번호는 8자리 이상과 영문+숫자+특수문자</h5>
                                        <h5>조합으로 입력해야 합니다.</h5>
                                        {pwConfirm ? <h5 className="font_box_top"> {<UilCheckCircle color="green"/>} 
                                        비밀번호 조합에 성공 하셨습니다. 🎉 </h5>: ''}
                                    </div>
                                </div>
                                <div className="sign_inputbox sign_warrning">
                                    <input type='password' placeholder="비밀번호 확인" className="sign_line" onChange={checkPWValue}/>
                                    <div className="font_box_top font_color_warning">
                                        {notsame ? <h5 className="sign_password_font">비밀번호와 비밀번호 확인이 서로 다릅니다.</h5> : ''}
                                    </div>
                                </div>
                                <div className="sign_inputbox sign_username-flex">
                                    <input placeholder="닉네임" className="sign_line" onChange={checkUsername}/>
                                    <button type="button" className="sign_btn_username" onClick={()=> handleUserName()}>
                                    닉네임 중복 검사    
                                    </button>
                                    {blanck ?
                                    <h5 className="sign_blak-word"> 
                                        🚫 닉네임에 공백은 사용 불가입니다.
                                    </h5> : ""
                                    }
                                </div>

                                <div className="profile_container">
                                    <h4 className="sign_info_font"> 🖼 아래 원하시는 프로필 이미지를 등록해주세요. </h4>
                                    <div className="profile_box">
                                        <label htmlFor="profile-upload" />
                                        <input type="file" id="profile-upload" accept="image/*" onChange={handleImg} />
                                    </div>
                                </div>

                                <button type="button" className="sign_btn" onClick={()=> handleLogin}>
                                    회원가입    
                                </button> 
                            </form>
                                  
                        </div>
                        <aside className="sign_aside">
                            <img className={`sign_img ${inClass}`} src={`/perfume_sign_${count}.jpeg`}/>
                        </aside>
                    </div>
                </section>
            </main>
            <Footer/>
            <div>
                {antMessage ?
                <div className="notice_message" >
                    <div>
                        <div class="notification-container">
                            <p> ✅ 사용하셔도 되는 닉네임입니다. </p>
                        </div>
                    </div>
                </div> : ""
                }

                {/* ################# 닉네임 있을 경우에 대한 모달창 보류 ################# */}
            </div>
        </>
    )
}



export default SignUp