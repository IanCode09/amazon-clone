import React from 'react'
import '../assets/css/Product.css'
import StarIcon from '@material-ui/icons/Star';

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>Webcam with Microphone</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>35.92</strong>
                </p>
                <div className='product__rating'>
                    <StarIcon style={{ color: 'red' }} />
                </div>
            </div>

            <img 
                src='https://images.unsplash.com/photo-1597424876915-41bd694b26da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
                alt=''
            />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
