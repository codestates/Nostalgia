import './Landerpage.css'
import Prolougue from '../components/Prolougue'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'




const Landerpage = () => {

    return (
        <body>
            <div className="title_container">
                <div className="landpage_title">Nostalgia</div>
            </div>
                <div className="btn_container">     
                    <div className="login_btn_container">
                    <a className="lander_login_btn">
                        <Link 
                        to="/login"
                        style={{color: 'inherit',textDecoration: 'none'}}>
                        Login
                        </Link>
                        </a>
                    </div>        
                    <div className="signup_btn_container">
                    <a className="signup_btn">
                        <Link to="/signup"
                        style={{color: 'inherit',textDecoration: 'none'}}>
                            Sign Up
                        </Link>
                        </a>
                    </div>
                </div>
                <div className="guestInto_btn_container">
                    <a className="guestInto_btn">
                        <Link to='mainpage'
                        style={{color: 'inherit',textDecoration: 'none'}}>
                        Are you First time?
                        </Link>
                        </a>
                </div>
                <Prolougue/>
                <Footer/>
        </body>
    )
};

export default Landerpage;