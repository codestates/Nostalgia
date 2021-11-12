import React from 'react'
import './Landerpage.css'
import Prolougue from '../components/Prolougue'
import Footer from '../components/Footer'




const Landerpage = ({props}) => {

    return (
        <body>
            <div className="title_container">
                <div className="landpage_title">Nostalgia</div>
            </div>
                <div className="">     
                    <div className="login_btn_container">
                    <a className="login_btn">Login</a>
                    </div>        
                    <div className="signup_btn_container">
                    <a className="signup_btn">Sign up</a>
                    </div>
                </div>
                <div className="guestInto_btn_container">
                    <a className="guestInto_btn">Are you First time?</a>
                </div>
                <Prolougue/>
                <Footer/>
        </body>
    )
};

export default Landerpage;