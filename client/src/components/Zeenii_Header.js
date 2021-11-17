import React, { useState } from 'react'
import './Zeenii_Header.css'
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

// 로그아웃 모달
const [logOutModal, setLogOutModal] = useState(false)


const handleClick = (el) => {
    setLogOutModal(el);   
}


    return (
        <header className='header_container'>
            <div className='header_titlecontainer'>
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
                    <div className="zenii_LogOut_icon"
                            onClick={handleClick}>
                    <UilSignout size={65}

                                isOpen={isOpen}/>
                    </div>
            </div>
            </div>
            {logOutModal ? <Logout result={handleClick}/> : ''}
        </header>
    )
}

export default Header