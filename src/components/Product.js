import React from 'react'
import '../assets/css/Product.css'
import StarIcon from '@material-ui/icons/Star';

function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon style={{ color: '#E94A4A' }} />
                    ))}
                </div>
            </div>

            <img src={image} alt=''/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
