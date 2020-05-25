import React from 'react';
import { description } from '../../../assets/text';
import imgDescription from '../../../assets/about.png'
import './about.sass'

const About = () => {
    return ( 
        <div className='container'>
            <div className='row box-about'>
                <div className='description col-sm-6'>
                    {description}
                    <div className='container-learn-more'>
                        <a href='#'>Learn More</a>
                    </div>
                </div>
                <div className='img-description col-sm-6 text-right'>
                    <img className='img-description-photo' src={imgDescription} />
                </div>
            </div>
        </div>
     );
}
 
export default About;