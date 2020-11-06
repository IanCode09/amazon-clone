import React from 'react'
import '../assets/css/Home.css'
import Product from '../components/Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg'
                    alt=''
                />

                <div className='home__row'>
                    <Product 
                        id='1'
                        title='AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler'
                        price={304.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg'
                        rating={5}
                    />
                    <Product 
                        id='2'
                        title='Lenovo Legion 5 Gaming Laptop, 15.6" FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black'
                        price={999.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81yFR9SeX-L._AC_SL1500_.jpg'
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='3' 
                        title='iRobot Roomba i7+ (7550) Robot Vacuum with Automatic Dirt Disposal-Empties Itself, Wi-Fi Connected, Smart Mapping, Works with Alexa, Ideal for Pet Hair, Carpets, Hard Floors, Black'
                        price={699}
                        image='https://images-na.ssl-images-amazon.com/images/I/71jDdf8kqVL._AC_SL1500_.jpg'
                        rating={5}
                    />
                    <Product 
                        id='4'
                        title='
                        AmazonBasics Hardside Spinner, Carry-On, Expandable Suitcase Luggage with Wheels, 30 Inch, Navy Blue'
                        price={96.49}
                        image='https://images-na.ssl-images-amazon.com/images/I/91RyqYk9mAL._AC_SL1500_.jpg'
                        rating={4}
                    />
                    <Product 
                        id='5'
                        title='Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black'
                        price={199.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg'
                        rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id='6'
                        title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
                        price={549.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>

            </div>
            
        </div>
    )
}

export default Home
