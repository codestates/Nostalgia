import './LukaHeaderStyle.css'
import {Link} from 'react-router-dom'
function LukaHeader() {


    return(
        <>
            <header className="LukaHeader_container">
                <div className="LukaHeader_main">
                    <div className="LukaHeader_project">
                      <Link to='/mainpage' style={{ color:'black',textDecoration: 'none'}}>  
                        Nostelgia
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default LukaHeader