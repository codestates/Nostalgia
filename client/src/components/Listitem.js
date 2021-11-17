import React ,{useState, useEffect}from "react";
import "./Listitem.css";
import axios from "axios";

const Listitem =({ itemList }) => {

 
    return (
        <li className="listitem" key={itemList.id}>
          <img className="listitem_img" />
            <div className="listitem_info_box">
              <div className="listitem_brand"
              style={{color: 'inherit',textDecoration: 'none'}}>
                  {itemList.brand.brand_name}</div>
              <div className="listitem_itemname"
              style={{color: 'inherit',textDecoration: 'none'}}>
                  {itemList.perfume_name}</div>
            </div>
        </li>
  );
}
export default Listitem