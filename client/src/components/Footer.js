import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (   
        <footer>
            <div className="footer_container"></div>
                <div className="footer_div">
                    <div className="member_container">
                        <div className="footer_col">
                            <h4 className="team_members">Team Members</h4>
                                <ul>
                                    <li className="li_container">
                                        <a className="member_name">손승우(Son)</a>
                                    </li>
                                    <li className="li_container">
                                        <a className="member_name">이상현 (Henry Lee)</a>
                                    </li>
                                    <li className="li_container">
                                         <a className="member_name">이진성 (Luka Lee)</a>
                                    </li>
                                    <li className="li_container">
                                         <a className="member_name">이진희(Zeenii Lee)</a>
                                    </li>
                                </ul>
                        </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;