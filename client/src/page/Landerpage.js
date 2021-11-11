import React from 'react'
import './Landerpage.css'




const Landerpage = () => {

    return (
        <body>
            <div className="title_container">
                <div className="landpage_title">Nostalgia</div>
            </div>
                <div className="btn_container">     
                    <div className="login_btn_container">
                    <span className="login_btn">Login</span>
                    </div>        
                    <div className="signup_btn_container">
                    <span className="signup_btn">Sign up</span>
                    </div>
                </div>
                <div className="guestInto_btn_container">
                    <div className="guestInto_btn">Into</div>
                </div>
        </body>
    )
};

export default Landerpage;