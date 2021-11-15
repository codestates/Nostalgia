import React, { useState } from 'react'
import './Header.css'
import { UilUser } from '@iconscout/react-unicons'
import {UilSignout} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'
import Mypage from '../page/Mypage'
import Logout from './Logout'

import axios from 'axios'

const Header = () => {
const [isOpen, setIsOpen] = useState(false)
const [isClick, setIsClick] = useState(false)
const [myPageIcon, setMyPageIcon] = useState(false)


const handleClick = () => setIsOpen(true);


    return (
        <header className='header'>
            <div className="header_title">
                 <Link to='/'
                 style={{textDecoration: 'none'}}>
                    Nostalgia 
                 </Link>
                 </div>
            
            <div className="icon_container">
                <div className="user_icon">
                    <Link to='/mypage'>
                        <UilUser 
                        size={65}/>
                    </Link>
                    </div>
                    <div className="signout_icon"
                            onClick={handleClick}>
                    <UilSignout size={65}
                                isOpen={isOpen}/>
                    </div>
            </div>
        </header>
    )
}

export default Header
