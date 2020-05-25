import React from 'react'
import './featured.sass'
import feature1 from '../../../assets/training/feature1.jpg'
import feature2 from '../../../assets/training/feature2.jpg'
import feature3 from '../../../assets/training/feature3.jpg'
import { text1, text2, text3 } from '../../../assets/text'

const Featured = () => {
    return ( 
        <div className='container featured-box'>
            <div className='title-featured'>Featured classes</div>
            <div className='row justify-content-center'>
                <div className="col-md-4 cycling-training">
                    <div className='shadow'>
                        <div className="fea-container">
                            <img className='fea1' alt='feature1' src={feature1}/>  
                            <div  className='hide-button'>
                                <a href='#'>Details</a>
                            </div> 
                        </div>
                        <div className='fea-footer'>
                            <h4>Cycling Training</h4>
                            {text1}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 tone-muscle">
                    <div className="shadow">
                        <div className="fea-container">
                            <img className='fea2' alt='feature2' src={feature2}/>  
                            <div  className='hide-button'>
                                <a href='#'>Details</a>
                            </div> 
                        </div>
                        <div className='fea-footer'>
                            <h5>Tone Muscle</h5>
                            {text2}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 meditation-work">
                    <div className="shadow">
                        <div className="fea-container">
                            <img className='fea3' alt='feature3' src={feature3}/>  
                            <div  className='hide-button'>
                                <a href='#'>Details</a>
                            </div> 
                        </div>
                        <div className='fea-footer'>
                            <h6>Meditation Work</h6>
                            {text3}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Featured;