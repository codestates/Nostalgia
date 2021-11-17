import React, { useState, useEffect } from 'react';
import './StarStyle.css'


function Rating({star}) {
 
  //console.log(star)
  return (
    <>
      <div>
        <div className='star-rating'>
          <span className={`star-background star-rating-size${1}`}></span>
        </div>
      </div>
    </>
  );
}

export default Rating;