import React from "react";
import {Link} from 'react-router-dom'
import "./Listitem.css";


const Listitem =({ itemList , specPage }) => {

    return (
      <Link to={`/itempage/${specPage.id}`}
            style={{textDecoration: 'none'}}>
      <li className="listitem" key={itemList.id}>
          <img className="listitem_img" 
                src={`https://localhost:4000/image/${itemList.perfume_img}`}/>
            <div className="listitem_info_box">
              <div className="listitem_brand"
              style={{color: 'black',textDecoration: 'none'}}>
                  {itemList.brand.brand_name}</div>
              <div className="listitem_itemname"
              style={{color: 'black',textDecoration: 'none'}}>
                  {itemList.perfume_name}</div>
            </div>
        </li>
      </Link>
      
  );
}
export default Listitem