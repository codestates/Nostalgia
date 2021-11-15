import Star from '../components/Star'
import './FavoriteListStyle.css'

function FavoriteList() {

    return(
        <>
            <li className="favoriateList_list">
                <div className="favoriateList_img-border">
                    <div className="favoriateList_img-box">
                        <img className="favoriateList_img" src="/perfume_login_1.jpeg"></img>
                    </div>
                </div>
                <ul className="favoriateList_totalList">
                    <div className="favoriateList_list_day-favoriate">2021-11-12</div> 
                    <li className="favoriateList_totalList-box">
                        Product: CHANEL No.5
                    </li>
                    <li className="favoriateList_totalList-box">
                        Brand: CHANEL
                    </li>
                    <li className="favoriateList_totalList-box">
                        <Star/>
                    </li>
                </ul>
            </li>
            
        </>
    )
}

export default FavoriteList