import React from 'react';
import "./Footer.css";

const Footer = () => {
    
    return (   
        <footer className="Footer_container">
            <section className="Footer_logo">
                <img className="Footer_img"src="/team_logo.png"></img>
            </section>
            <section className="Footer_team-box">   
                <div className="Footer_team-position">
                    <div className="Footer_team-front">
                        Front-End
                    </div>
                    <div className="Footer_team-name">
                        이진성 (Luka Lee)
                    </div>
                    <div className="Footer_team-name">
                        이진희 (Zeenii Lee)
                    </div>

                    <div className="Footer_team-back">
                        Back-End
                    </div>
                    <div className="Footer_team-name">
                        손승우(Son)
                    </div>
                    <div className="Footer_team-name">
                        이상현 (Henry Lee)
                    </div>
                </div>
            </section>
            <section className="Footer_project">
                <div className="Footer_project-name">
                    Nostelgia
                </div>
            </section>
        </footer>
    )
};

export default Footer;