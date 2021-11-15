import React from 'react'
import './Perfume.css'


const Perfume = ({perfume}) =>{

    return (
        <div key={perfume.id} className='perfume'>
            <img className='perfume_img' src={perfume.image} alt={perfume.name} />
            <span className='perfume_name' data-testid={perfume.name}>{perfume.name}</span>
            <span className='perfume_brand'>{perfume.brand}</span>
        </div>
    )
}


export default Perfume
