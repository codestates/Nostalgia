import React, { useState, useEffect } from 'react';
import './StarStyle.css'


function Rating() {
 
  const [rating, setRating] = useState('5')


  return (
    <>
      <div>
        <div className='star-rating'>
          <span className={`star-background star-rating-size${rating}`}></span>
        </div>
      </div>
    </>
  );
}

export default Rating;