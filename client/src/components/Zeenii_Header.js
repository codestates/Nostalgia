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


const handleClick = () => setIsOpen(true);


    return (
        <header className='header_container'>
            <div className='header_titlecontainer'>
                <div className="header_title">
                    <Link to='/'
                    style={{color: 'inherit',textDecoration: 'none'}}>
                        Nostalgia 
                    </Link>
                    </div>
            <div className="icon_container">
                <div className="user_icon">
                    <Link to='/mypage'
                    style={{color: 'inherit',textDecoration: 'none'}}>
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
            </div>
            
        </header>
    )
}

export default Header


{/* <header className="LukaHeader_container">
    <div className="LukaHeader_main">
    <div className="LukaHeader_project">
    Nostelgia
    </div>
    </div>
    </header> */}