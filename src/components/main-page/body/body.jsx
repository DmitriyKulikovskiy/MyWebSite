import React from 'react';
import './body.sass'

const Banner = () => {
    return (
    <div className='container'>
        <div className='banner-box'>
            <div className='row justify-content-center'>
                <div className='banner-effect'></div>
            </div>
            <div className='banner-title text-right'>
                <h1>Fell</h1>
                <h2>Good</h2>
                <h3>breath</h3>
                <a href='#'>Become a member</a>
            </div>
        </div>
    </div> 
    );
}

 
export default Banner;