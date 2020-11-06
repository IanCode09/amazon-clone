import React from 'react'
import '../assets/css/Payment.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../components/CheckoutProduct'
import { Link } from 'react-router-dom'

function Payment() {
    const [ { basket, user }, action ] = useStateValue()
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to='/checkout'>{basket.length} items</Link>
                    )
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Jalan Cidangiang</p>
                        <p>Bogor, Indonesia</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
