import Star from '../components/Star'
import './FavoriteListStyle.css'

function FavoriteList({item }) {

    return(
        <>
            <li className="favoriateList_list">
                <div className="favoriateList_img-border">
                    <div className="favoriateList_img-box">
                        <img className="favoriateList_img" src={`${process.env.REACT_APP_API_URL}/image/${item.perfume_img}`}></img>
                    </div>
                </div>
                <ul className="favoriateList_totalList">
                    <div className="favoriateList_list_day-favoriate">{item.createdAt.slice(0, 10)}</div> 
                    <li className="favoriateList_totalList-box">
                        제품명: {item.perfume_name}
                    </li>
                    <li className="favoriateList_totalList-box">
                        Brand: {item.brand_name}
                    </li>
                    <li className="favoriateList_totalList-box">
                      
                        <Star star={item.avg_rating}/>
                    </li>
                </ul>
            </li>
            
        </>
    )
}

export default FavoriteList 