import React, { useState } from 'react'
import './Header.css'
import { UilUser } from '@iconscout/react-unicons'

const Header = () => {

const [myPageIcon, setMyPageIcon] = useState(false)


    return (
        <header>
            <div className="header_title"> Nostalgia </div>
                <div className="user_icon"><UilUser /></div>
                <i className="far fa-sign-out-alt"></i>
        </header>
    )
}

export default Header
