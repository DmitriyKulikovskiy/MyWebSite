import React from 'react'
import './service.sass'
import img1 from '../../../assets/service/serv-icon1.png'
import img2 from '../../../assets/service/serv-icon2.png'
import img3 from '../../../assets/service/serv-icon3.png'
import { text4 } from '../../../assets/text'

const Service = () => {
    return ( 
        <div className='main-section'>
            <div className='container service-box'>
                <div className="row">
                    <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 content-box-service">
                        <div className='title'>
                            Our service
                        </div>
                        <div className='description-block-container'>
                            <div className='icon-1'>
                                <div><img alt='serv1' src={img1} /></div>
                                <div className='icon-text'>
                                    <span>Personal Training</span>
                                    {text4}
                                </div>
                            </div>
                            <div className='icon-2'>
                                <div><img alt='serv2' src={img2} /></div>
                                <div className='icon-text'>
                                    <span>Personal Training</span>
                                    {text4}
                                </div>
                            </div>
                            <div className='icon-3'>
                                <div><img alt='serv3' src={img3}/></div>
                                <div className='icon-text'>
                                    <span>Personal Training</span>
                                    {text4}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Service;