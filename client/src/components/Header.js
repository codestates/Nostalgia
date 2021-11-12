import React, { useState } from 'react'
import './Header.css'
import { UilUser } from '@iconscout/react-unicons'
import {UilSignout} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'
import Mypage from '../page/Mypage'

const Header = () => {

const [isClick, setIsClick] = useState(false)
const [myPageIcon, setMyPageIcon] = useState(false)


    return (
        <header className='header'>
            <div className="header_title"> Nostalgia </div>
            
            <div className="icon_container">
                <div className="user_icon">
                    <Link to='/mypage'>
                        <UilUser 
                        size={65}/>
                    </Link>
                    </div>
                    <div className="signout_icon">
                    <UilSignout size={65}/>
                    </div>
            </div>
        </header>
    )
}

export default Header
